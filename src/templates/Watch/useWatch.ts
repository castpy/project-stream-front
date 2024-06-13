import { getMovieEmbedService } from "@/services/public/get.movie-embed.service";
import { GetMovieEmbedService } from "@/types/public/get.movie-embed.service";
import { useState } from "react";

export default function useWatch() {
  const [movie, setMovie] = useState<GetMovieEmbedService | null>(null);

  const handleGetMovieEmbed = async (id: string) => {
    try {
      const response = await getMovieEmbedService(id);
      setMovie(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return {
    movie,
    handleGetMovieEmbed
  }
}