import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListMovieProps } from "./types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
}

const ListMovieComp = ({ categorie, movies }: ListMovieProps) => {
  const theme = useTheme();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile
      ? 2
      : movies.length >= 3
      ? 3
      : movies.length <= 2
      ? 2
      : 3,
    slidesToScroll: isMobile
      ? 2
      : movies.length >= 3
      ? 3
      : movies.length <= 2
      ? 2
      : 3,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        maxWidth: 1920,
        marginBottom: 4,
      }}
    >
      <Link href={`/categorie/${categorie}`}>
        <Typography variant="h4" sx={{ mb: 2, ml: 2 }}>
          {categorie}
        </Typography>
      </Link>
      <Box sx={{ maxWidth: "calc(100% - 20px)" }}>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <Box
              key={movie.id}
              sx={{
                padding: "10px",
                position: "relative",
                cursor: "pointer",
                transform: hoverIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              <Image
                src={movie.image}
                alt={movie.title}
                width={400}
                height={200}
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
              {hoverIndex === index && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {movie.customer.name}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ListMovieComp;
