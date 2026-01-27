import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

import { BookService, type TBook } from "../../services/books";
import { TagInput } from "../../components/tagInput/TagInput";

export const Home = () => {
  const [books, setBooks] = useState<TBook[]>([]);

  const [searchTags, setSearchTags] = useState<string[]>([]);

  const fetchBooks = async () => {
    console.log("Enviando tags:", searchTags);

    try {
      const response = await BookService.getAll();
      setBooks(response);
    } catch (error) {
      console.log("Error while fetching books:", error);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
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
      <Typography variant="h3" fontWeight="bold">
        Book Finder
      </Typography>
      <Typography color="secondary">Encontre sua próxima leitura!</Typography>

      <TagInput tags={searchTags} setTags={setSearchTags} />

      <Button
        variant="contained"
        endIcon={<RiArrowRightLine />}
        onClick={fetchBooks}
        sx={{
          width: { xs: "80vw", sm: "150px" },
          borderRadius: "15px",
          height: "50px",
        }}
      >
        Pesquisar
      </Button>
    </Box>
  );
};
