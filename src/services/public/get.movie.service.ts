import { GetMovieServiceResponse } from "@/types/public/get.movie.serivce";
import axios from "axios";

export const getMovieService = async (id: string) => {
  try {
    return await axios.get<GetMovieServiceResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}`,
    );
  } catch (error) {
    throw error;
  }
};
