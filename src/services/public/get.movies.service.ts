import { MoviesServiceResponse } from "@/types/public/get.movies.service";
import axios from "axios";

export default function getMoviesService() {
  try {
    return axios.get<MoviesServiceResponse[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/movies`
    );
  } catch (error) {
    throw error;
  }
}
