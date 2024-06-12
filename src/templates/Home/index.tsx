"use client";
import React from "react";
import HighlightsComp from "../../components/Highlights";
import { Box } from "@mui/material";
import ListMovieComp from "@/components/ListMovie";
import { ListMovies } from "@/constants/mock";

const HomeTemplate = () => {
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
      <ListMovieComp
        categorie={ListMovies.categorie}
        movies={ListMovies.movies}
      />
      <ListMovieComp
        categorie={ListMovies.categorie}
        movies={ListMovies.movies}
      />
      <ListMovieComp
        categorie={ListMovies.categorie}
        movies={ListMovies.movies}
      />
    </Box>
  );
};

export default HomeTemplate;
