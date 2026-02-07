import { Api } from "../axios";
import type { TBook } from "./types";

const BookService = {
  getRecommendations: async (tags: string[]): Promise<TBook[]> => {
    const response = await Api.post(
      `${import.meta.env.VITE_API_URL}/recommend`,
      {
        tags: tags,
      },
    );

    return response.data;
  },
};

export { BookService };
