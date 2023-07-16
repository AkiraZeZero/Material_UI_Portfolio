import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Container } from "@mui/system";
import MuiGrid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import gg from "../Images/gg.png";
import candles from "../Images/candles.jpg";
import chicky from "../Images/chicky.jpg";
import bookNook from "../Images/bookNook.jpg";
import cozyCandles from "../Images/cozyCandles.jpg";
import dice from "../Images/dice.jpg";
import dreamCave from "../Images/dreamCave.jpg";
import dreamCave2 from "../Images/dreamCave2.jpg";
import dreamCave3 from "../Images/dreamCave3.jpg";
import dreamCave4 from "../Images/dreamCave4.jpg";
import rainbowCave from "../Images/rainbowCave.jpg";
import rainbowCave2 from "../Images/rainbowCave2.jpg";
import rainbowCave3 from "../Images/rainbowCave3.jpg";
import rainbowCave4 from "../Images/rainbowCave4.jpg";

export default function Slider() {
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  return (
    <Box>
      <br />
      <Container
        className="sliderBox"
        maxWidth="lg"
        sx={{
            borderRadius: "16px",
        }}
        >
        <Box
          sx={{
              px: 5,
              py: 3,
            }}
            >
            <h2>Here is some of my AI art I've created</h2>
          <ImageList sx={{ width: 1050}} cols={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </Box>
  );
}

const itemData = [
  {
    img: candles,
    title: "Camera",
  },
  {
    img: bookNook,
    title: "Coffee",
  },
  {
    img: cozyCandles,
    title: "Hats",
  },
  {
    img: dice,
    title: "Honey",
  },
  {
    img: dreamCave,
    title: "Basketball",
  },
  {
    img: dreamCave2,
    title: "Fern",
  },
  {
    img: dreamCave3,
    title: "Mushrooms",
  },
  {
    img: dreamCave4,
    title: "Tomato basil",
  },
  {
    img: rainbowCave,
    title: "Sea star",
  },
  {
    img: rainbowCave2,
    title: "Bike",
  },
  {
    img: rainbowCave3,
    title: "Bike",
  },
  {
    img: rainbowCave4,
    title: "Bike",
  },
];
