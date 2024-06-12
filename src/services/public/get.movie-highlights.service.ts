import { MovieHighlights } from "@/types/public/get.movie-highlights.service";
import axios from "axios";

export default function getMovieHighlightsService() {
  try {
    return axios.get<MovieHighlights[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/highlights`
    );
  } catch (error) {
    throw error;
  }
}
