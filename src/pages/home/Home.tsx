import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

import { BookService, type TBook } from "../../services/books";
import { TagInput } from "../../components/tagInput/TagInput";
import { BookCard } from "../../components/bookCard/BookCard";

export const Home = () => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [loading, isLoading] = useState(false);

  const fetchBooks = async () => {
    console.log("Enviando tags:", searchTags);
    isLoading(true);
    try {
      const response = await BookService.getRecommendations(searchTags);
      setBooks(response);
    } catch (error) {
      console.log("Error while fetching books:", error);
    } finally {
      isLoading(false);
    }
  };

  return (
    <Box
      sx={{
        p: 5,
      }}
    >
      {/**Seção de pesquisa */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          p: 5,
        }}
      >
        <Box
          component="img"
          src="./bookFinderLogo.png"
          sx={{ height: "100px", width: "100px" }}
        />
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          Book Finder
        </Typography>
        <Typography color="secondary"  textAlign="center">
          Encontre sua próxima leitura com apenas um click!
        </Typography>

        <TagInput tags={searchTags} setTags={setSearchTags} />

        <Button
          variant="contained"
          endIcon={<RiArrowRightLine />}
          onClick={fetchBooks}
          loading={loading}
          sx={{
            width: { xs: "80vw", sm: "150px" },
            borderRadius: "15px",
            height: "50px",
          }}
        >
          Pesquisar
        </Button>
      </Box>

      {/**Seção de resultados */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {books &&
          books.map((book) => (
            <BookCard
              authors={book.authors}
              averageRating={book.averageRating}
              description={book.description}
              pageCount={book.pageCount}
              previewLink={book.previewLink}
              reason={book.reason}
              thumbnail={book.thumbnail}
              title={book.title}
            />
          ))}
      </Box>
    </Box>
  );
};
