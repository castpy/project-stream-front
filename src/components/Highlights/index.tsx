import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
import useHighlights from "./useHighlights";
import NotFoundTemplate from "@/templates/NotFound";

const HighlightsComp = () => {
  const {
    Highlights,
    currentImageIndex,
    loading,
    pushToWatch,
    handleGetHighlights,
    setCurrentImageIndex,
  } = useHighlights();
  const [opacity, setOpacity] = useState(1); // Adiciona um estado para controlar a opacidade

  useEffect(() => {
    handleGetHighlights();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0); // Inicia o fade-out
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % (Highlights ? Highlights.length : 1)
        );
        setOpacity(1); // Restaura a opacidade após a mudança de imagem
      }, 1000); // Espera 1 segundo para completar o fade-out antes de mudar a imagem
    }, 7000); // Inicia o fade-out 1 segundo antes do fim da animação de zoom
    return () => clearInterval(timer);
  }, [Highlights, setCurrentImageIndex]);

  return (
    <Box
      onClick={() =>
        pushToWatch(Highlights ? Highlights[currentImageIndex].movieId : "")
      }
      sx={{
        marginTop: -3,
        width: "100%",
        height: "100vw",
        maxWidth: 1920,
        maxHeight: 750,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
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
      {Highlights ? (
        <>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${
                Highlights ? Highlights[currentImageIndex].movie.image : ""
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // animation: "zoom-out 8s infinite",
              opacity: opacity, // Aplica a opacidade controlada pelo estado
              transition: "opacity 1s ease-in-out", // Adiciona transição suave para o efeito de fade-out
              "@keyframes zoom-out": {
                from: {
                  transform: "scale(1.2)",
                },
                to: {
                  transform: "scale(1)",
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
                display: "none",
              },
              "@media (max-width: 300px)": {
                display: "none",
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
              {Highlights ? Highlights[currentImageIndex].movie.title : ""}
            </Typography>
            <Link
              href={`/movie/${
                Highlights ? Highlights[currentImageIndex].movieId : ""
              }`}
            >
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
                <Typography
                  variant="body1"
                  sx={{ marginLeft: 1, fontWeight: 900 }}
                >
                  Assistir
                </Typography>
              </Button>
            </Link>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default HighlightsComp;
