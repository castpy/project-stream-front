"use client";
import React, { useEffect } from "react";
import { Props } from "./types";
import useUser from "./useUser";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import Links from "@/components/Links";
import ListMovieComp from "@/components/ListMovie";

const UserTemplate = ({ id }: Props) => {
  const { user, handleGetUser } = useUser();

  useEffect(() => {
    handleGetUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {user ? (
        <Box
          sx={{
            gap: 2,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "1280px",
            width: "100vw",
          }}
        >
          <Image
            src={user?.customer.avatar}
            alt={user?.customer.name}
            width={250}
            height={250}
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="h4">{user?.customer.name}</Typography>
          <Links
            facebook={user?.customer.facebook || ""}
            instagram={user.customer.instagram || ""}
            twitter={user.customer.twitter || ""}
            youtube={user.customer.youtube || ""}
          />
          {user.movies.map((movie, index) => (
            <ListMovieComp
              key={index}
              categorie={movie.category}
              movies={movie.movies}
            />
          ))}
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default UserTemplate;
