import { GetMovieEmbedService } from "@/types/public/get.movie-embed.service";
import axios from "axios";

export const getMovieEmbedService = async (id: string) => {
  try {
    return axios.get<GetMovieEmbedService>(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/embed/${id}`
    );
  } catch (error) {
    throw error;
  }
};
