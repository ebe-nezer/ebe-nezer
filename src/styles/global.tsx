import { styled } from "@mui/material";

export const BackgroundDecoration = styled("div")({
  "&::after": {
    content: `""`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    // backgroundImage: `linear-gradient(#383838 1px, transparent 1px), linear-gradient(to right, #383838 1px, transparent 1px);`,
  },
});

export const PageContainer = styled("div")({
  width: "100%",
});
