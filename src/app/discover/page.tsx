"use client";
import ListMovieComp from "@/components/ListMovie";
import { ListMovies } from "@/constants/mock";
import { Box, TextField } from "@mui/material";
import React from "react";

const DiscoverPage = () => {
  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 2,
          maxWidth: 1280,
          marginBottom: 2,
        }}
      >
        <TextField label="Search" variant="outlined" fullWidth />
      </Box>

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

export default DiscoverPage;
