import { Box, Chip, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import { RiSearchLine, RiSlashCommands2 } from "react-icons/ri";

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export const TagInput = ({ tags, setTags }: TagInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = inputValue.trim();

      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setInputValue("");
      }
    }

    if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
        p: "10px 15px",
        width: { xs: "90vw", sm: "600px" },
        borderRadius: "20px",
        backgroundColor: "background.paper",
        border: "1px solid transparent",
        "&:focus-within": {
          border: "1px solid",
          borderColor: "primary.main",
        },
      }}
    >
      <Box display="flex" color="secondary.main">
        <RiSearchLine size={20} />
      </Box>

      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          onDelete={() => handleDelete(tag)}
          sx={{
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            "& .MuiChip-deleteIcon": {
              color: "secondary.contrastText",
              opacity: 0.7,
              "&:hover": { opacity: 1 },
            },
          }}
        />
      ))}

      <InputBase
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? "Busque por gênero, tema..." : ""}
        sx={{
          flex: 1,
          minWidth: "120px",
          color: "text.primary",
        }}
      />

      <Box display="flex" color="secondary.main">
        <RiSlashCommands2 size={20} />
      </Box>
    </Paper>
  );
};
