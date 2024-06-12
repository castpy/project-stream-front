import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
import { Highlights } from "@/constants/mock";

const HighlightsComp = () => {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Highlights.length);
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <Box
      sx={{
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
      {previousImageIndex !== null && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Highlights[previousImageIndex].src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            animation: "fadeOut 8s forwards",
          }}
        />
      )}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Highlights[currentImageIndex].src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          animation: "zoom-out 8s infinite",
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
          bottom: 50,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 2,
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            bottom: 50,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: 900,
            textAlign: "center",
            "@media (max-width: 600px)": {
              fontSize: "2rem",
            },
          }}
        >
          {Highlights[currentImageIndex].name}
        </Typography>
        <Link href={`/movie/${Highlights[currentImageIndex].id}`}>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              minWidth: { xs: 250, sm: 500 },
              "@media (max-width: 600px)": {
                minWidth: "80%",
              },
            }}
          >
            <PlayArrowIcon
              sx={{
                fontSize: 40,
                color: "white",
              }}
            />
            <Typography variant="body1" sx={{ marginLeft: 1, fontWeight: 900 }}>
              Assistir
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HighlightsComp;
