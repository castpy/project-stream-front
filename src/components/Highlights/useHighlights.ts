import getMovieHighlightsService from "@/services/public/get.movie-highlights.service";
import { MovieHighlights } from "@/types/public/get.movie-highlights.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useHighlights() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [Highlights, setHighlights] = useState<MovieHighlights[] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(
    null
  );

  const handleGetHighlights = async () => {
    try {
      setLoading(true);
      const response = await getMovieHighlightsService();
      setHighlights(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  return {
    Highlights,
    currentImageIndex,
    previousImageIndex,
    handleGetHighlights,
    setCurrentImageIndex,
    setPreviousImageIndex,
  };
}