"use client";
import React, { useEffect } from "react";
import { Props } from "./types";
import useMovie from "./useMovie";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";

const MovieTemplate = ({ id }: Props) => {
  const { loading, movie, handleGetMovie } = useMovie();

  useEffect(() => {
    handleGetMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        sx={{
          marginTop: -10,
          width: "100%",
          height: "100vw",
          maxWidth: 1920,
          maxHeight: 750,
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,1), transparent)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${movie?.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            animation: "zoom-out 8s forwards",
            "@keyframes zoom-out": {
              from: {
                transform: "scale(1.2)",
              },
              to: {
                transform: "scale(1)",
              },
            },
            "@keyframes fadeOut": {
              from: {
                opacity: 1,
              },
              to: {
                opacity: 0,
              },
            },
            "@media (max-width: 600px)": {
              backgroundSize: "contain",
              backgroundPosition: "center center",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 400,
            left: 10,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 600px)": {
              bottom: 150,
            },
            "@media (max-width: 400px)": {
              bottom: 100,
            },
          }}
        >
          <Link href={`/watch/${id}`}>
            <PlayArrowIcon
              sx={{
                fontSize: 100,
                color: "white",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 150,
          left: 10,
          right: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 2,
          justifyContent: "start",
          alignItems: "start",
          "@media (max-width: 600px)": {
              bottom: 120,
            },
            "@media (max-width: 350px)": {
              bottom: 10,
            },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: "4rem",
            fontWeight: 900,
            textAlign: "center",
            "@media (max-width: 600px)": {
              fontSize: "2rem",
            },
            "@media (max-width: 500px)": {
              fontSize: "1rem",
            },
          }}
        >
          {movie?.title}
        </Typography>
        <Box
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            src={movie ? movie?.customer.avatar : ""}
            width={50}
            height={50}
            alt="User Avatar"
            style={{
              borderRadius: "50%",
            }}
          />
          <Link href={`/user/${movie?.customer.id}`}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 100,
                "@media (max-width: 600px)": {
                  fontSize: "1rem",
                },
                "@media (max-width: 500px)": {
                  fontSize: "0.8rem",
                },
              }}
            >
              {movie?.customer.name}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            gap: 1,
            maxWidth: 1000,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {movie?.category.map((category) => (
            <span
              key={category}
              style={{
                padding: 5,
                color: "white",
                fontSize: "1rem",
                fontWeight: 900,
                borderRadius: 5,
                backgroundColor: "#1E1C1B",
              }}
            >
              {category}
            </span>
          ))}
        </Box>
        <Typography variant="body1" sx={{ color: "white", maxWidth: 1000 }}>
          {`"${movie?.description}"`}
        </Typography>
        {movie?.customer.youtube && (
          <Link href={movie?.customer.youtube} target="_blank">
            <span
              style={{
                gap: 5,
                padding: 5,
                display: "flex",
                color: "white",
                fontSize: "1rem",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1E1C1B",
              }}
            >
              <YouTubeIcon /> Apoie <strong>{movie.customer.name}</strong>
            </span>
          </Link>
        )}
      </Box>
    </>
  );
};

export default MovieTemplate;
