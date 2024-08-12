import { useEffect } from "react";
import { Paper, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "@components/header";
import { BackgroundDecoration } from "styles/global";

const Layout = () => {
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LayoutContainer>
      <Header />
      <MainContainer variant="outlined">
        <InnerContainer>
          <BackgroundDecoration />
          <Outlet />
        </InnerContainer>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled("div")(() => ({
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)",
  position: "relative",
  top: 0,
  left: 0,
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  overflow: "hidden",
  "&::-webkit-scrollbar": {
    width: 8,
    height: 8,
  },
}));

const MainContainer = styled(Paper)(() => ({
  overflow: "auto",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  transition: "all .2s",
  position: "relative",
  zIndex: 1,
  "&::-webkit-scrollbar": {
    width: 8,
    height: 8,
  },
  backgroundColor: "#0d0d0d",
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#C9E1E7",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
}));

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image:
// background-size: 20px 20px;

const InnerContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  top: 0,
  left: 0,
});
