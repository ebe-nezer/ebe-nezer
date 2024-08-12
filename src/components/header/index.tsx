import CustomButton from "@components/button";
import CustomTypography from "@components/typography";
import { Paper } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { styled } from "@mui/system";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container variant="outlined">
      <LogoContainer>
        <img src="/vite.svg" alt="logo" />
      </LogoContainer>
      <Navbar>
        <AiOutlineMenu
          size={"28px"}
          cursor={"pointer"}
          color="grey"
          onClick={() => setShowMenu(true)}
        />
      </Navbar>
      <NavbarOptions
        sx={{
          // "&:hover": {
          // ".MuiTypography-root": {
          //   opacity: 0.3,
          //   transition: "all .2s",
          // },
          opacity: showMenu ? 1 : 0,
          zIndex: showMenu ? zIndex.modal * 100 : -1,
          transform: showMenu ? "translateX(0px)" : "translateX(100%)",
          // },
          transition: "all .2s",
        }}
      >
        <div className="header__button__close">
          <MdClose
            size={"28px"}
            color="grey"
            cursor={"pointer"}
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="options__container">
          {options.map((e) => {
            const id = e.route.split("/")[1] || "home";
            return (
              <CustomButton
                id={id}
                // disabled={id !== "home"}
                sx={{
                  margin: "12px 0px",
                  cursor: id !== "home" ? "not-allowed" : "pointer",
                  [`&#${id}:hover`]: {
                    ".MuiTypography-root": {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => {
                  if (id !== "home") alert("Will Be Available Soon");
                  setShowMenu(false);
                }}
                variant="text"
              >
                <CustomTypography variant="h1" fontWeight={"bold"}>
                  {e.text}
                </CustomTypography>
              </CustomButton>
            );
          })}
        </div>
      </NavbarOptions>
      <Options
        sx={{
          // "&:hover": {
          ".MuiTypography-root": {
            opacity: 0.3,
            transition: "all .2s",
          },
          // },
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

const Options = styled("div")(({ theme }) => ({
  width: "max-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down(880)]: {
    display: "none",
  },
}));

const Navbar = styled("div")(({ theme }) => ({
  width: "max-content",
  height: "max-content",
  [theme.breakpoints.up(880)]: {
    display: "none",
  },
}));

const NavbarOptions = styled("div")({
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "#0d0d0d",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ".options__container": {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ".header__button__close": {
    display: "flex",
    paddingRight: "32px",
    flexDirection: "row-reverse",
    alignItems: "center",
    height: "100px",
    width: "100%",
  },
});
