import CustomButton from "@components/button";
import CustomTypography from "@components/typography";
import { Paper } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { styled } from "@mui/system";

const options = [
  {
    route: "/",
    text: "🏠 Home ",
  },
  {
    route: "/experience",
    text: "🫠 Experience",
  },
  {
    route: "/projects",
    text: "💻 Projects",
  },
  {
    route: "/contact",
    text: "🤙 Contact",
  },
];

const Header = () => {
  return (
    <Container variant="outlined">
      <LogoContainer>
        <img src="/vite.svg" alt="logo" />
      </LogoContainer>
      <Options
        sx={{
          "&:hover": {
            ".MuiTypography-root": {
              opacity: 0.3,
              transition: "all .2s",
            },
          },
          transition: "all .2s",
        }}
      >
        {options.map((e) => {
          const id = e.route.split("/")[1] || "home";
          return (
            <CustomButton
              id={id}
              // disabled={id !== "home"}
              sx={{
                cursor: id !== "home" ? "not-allowed" : "pointer",
                [`&#${id}:hover`]: {
                  ".MuiTypography-root": {
                    opacity: 1,
                  },
                },
              }}
              onClick={() => {
                if (id !== "home") alert("Will Be Available Soon");
              }}
              variant="text"
            >
              <CustomTypography fontWeight={"bold"}>{e.text}</CustomTypography>
            </CustomButton>
          );
        })}
      </Options>
    </Container>
  );
};

export default Header;

const Container = styled(Paper)({
  width: "100%",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: zIndex.appBar,
});

const LogoContainer = styled("div")({
  height: "60px",
  img: {
    height: "100%",
  },
});

const Options = styled("div")({
  width: "max-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});
