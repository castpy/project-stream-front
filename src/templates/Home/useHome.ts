import getMoviesService from "@/services/public/get.movies.service"
import { MoviesServiceResponse } from "@/types/public/get.movies.service"
import { useState } from "react"

export default function useHome() {
  const [movies, setMovies] = useState<MoviesServiceResponse[] | null>(null)

  const handleGetMovies = async () => {
    try {
      const response = await getMoviesService()
      setMovies(response.data)
    } catch (error){
      console.error(error)
    }
  }

  return {
    movies,
    handleGetMovies
  }
}