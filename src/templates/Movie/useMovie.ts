import { getMovieService } from "@/services/public/get.movie.service";
import { GetMovieServiceResponse } from "@/types/public/get.movie.serivce";
import { useState } from "react";

export default function useMovie() {
  const [loading, setLoading] = useState<boolean>(false)
  const [movie, setMovie] = useState<GetMovieServiceResponse | null>(null)

  const handleGetMovie = async (id: string) => {
    try {
      setLoading(true)
      const response = await getMovieService(id)
      setMovie(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    movie,
    handleGetMovie
  }
}