import { Api } from "../axios";
import type { TBook } from "./types";

const BookService = {
  getAll: async () => {
    const { data } = await Api.get<TBook[]>("/books");
    return data;
  },
};

export { BookService };
