"use client";
import React, { useEffect } from "react";
import HighlightsComp from "../../components/Highlights";
import { Box } from "@mui/material";
import ListMovieComp from "@/components/ListMovie";
import { ListMovies } from "@/constants/mock";
import useHome from "./useHome";

const HomeTemplate = () => {
  const { movies, handleGetMovies } = useHome();

  useEffect(() => {
    handleGetMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      sx={{
        marginTop: -10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <HighlightsComp />

      {movies && movies.map((movie, index) => (
        <ListMovieComp
          key={index}
          categorie={movie.category}
          movies={movie.movies}
        />
      ))}
    </Box>
  );
};

export default HomeTemplate;
