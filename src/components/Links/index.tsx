import React from "react";
import { Props } from "./types";
import Link from "next/link";
import { Box } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Links = ({ facebook, twitter, instagram, youtube }: Props) => {
  return (
    <Box
      sx={{
        gap: 2,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {facebook && (
        <Link href={facebook} target="_blank" style={{
          gap: 1,
          padding: 5,
          display: "flex",
          alignItems: "center",
          borderRadius: '5px',
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#1E1C1B",
        }}>
          <FacebookIcon /> Facebook
        </Link>
      )}
      {twitter && (
        <Link href={twitter} target="_blank" style={{
          gap: 1,
          padding: 5,
          display: "flex",
          alignItems: "center",
          borderRadius: '5px',
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#1E1C1B",
        }}>
          <XIcon /> Twitter
        </Link>
      )}
      {instagram && (
        <Link href={instagram} target="_blank" style={{
          gap: 1,
          padding: 5,
          display: "flex",
          alignItems: "center",
          borderRadius: '5px',
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#1E1C1B",
        }}>
          <InstagramIcon /> Instagram
        </Link>
      )}
      {youtube && (
        <Link href={youtube} target="_blank" style={{
          gap: 1,
          padding: 5,
          display: "flex",
          alignItems: "center",
          borderRadius: '5px',
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#1E1C1B",
        }}>
          <YouTubeIcon /> Youtube
        </Link>
      )}
    </Box>
  );
};

export default Links;
