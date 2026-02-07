import { Box, Card, CardContent, Checkbox, Typography } from "@mui/material";
import { FaRegHeart, FaHeart, FaStar, FaBookOpen } from "react-icons/fa";

interface BookCardProps {
  title: string;
  authors: string[];
  description: string;
  pageCount: number;
  averageRating: number;
  thumbnail: string;
  previewLink: string;
  reason: string;
}

export const BookCard = (book: BookCardProps) => {
  return (
    <Card
      sx={{
        width: "450px",
        maxHeight: "250px",
        borderRadius: "15px",
        backgroundColor: "#0F172A",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src={book.thumbnail}
          height="100%"
          style={{ objectFit: "cover", marginRight: "20px" }}
        />
        <Box
          sx={{
            width: "100%",
          }}
        >
          {/**Titulo e botão de favorito */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              {book.title}
            </Typography>
            <Checkbox
              color="error"
              icon={<FaRegHeart />}
              checkedIcon={<FaHeart />}
            />
          </Box>

          {/**Autores */}
          <Typography variant="subtitle2">{book.authors}</Typography>

          <Box
            sx={{
              height: "100px",
              my: "10px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              width: "90%",
              color: "text.secondary",
            }}
          >
            <Typography variant="caption">{book.description}</Typography>
          </Box>

          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaStar color="#EAB308" />
              <Typography>{book.averageRating}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FaBookOpen />
              <Typography>{book.pageCount}</Typography>
            </Box>
          </Box> */}
        </Box>
      </CardContent>
    </Card>
  );
};
