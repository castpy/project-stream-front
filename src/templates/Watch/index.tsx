"use client";
import React, { useEffect } from "react";
import { Props } from "./types";
import useWatch from "./useWatch";
import { Box } from "@mui/material";

const WatchTemplate = ({ id }: Props) => {
  const { movie, handleGetMovieEmbed } = useWatch();

  useEffect(() => {
    handleGetMovieEmbed(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      {movie && (
        <iframe
          src={movie.embed}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay=1; disablekb=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </Box>
  );
};

export default WatchTemplate;
