import CustomButton from "@components/button";
import CtaButton from "@components/button/cta.button";
import CustomTypography from "@components/typography";
import { styled } from "@mui/material";
import { PageContainer } from "styles/global";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer
      sx={({ breakpoints }) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ".headline": {
          "& *": {
            fontFamily: "Syne",
            color: "#ffffffaa",
          },
          "& b": {
            color: "#ffffff",
            fontWeight: 600,
          },
        },
        [breakpoints.down(520)]: {
          ".headline": {
            fontSize: "54px",
          },
          ".subline": {
            fontSize: "16px",
          },
        },
        [breakpoints.down(390)]: {
          ".headline": {
            fontSize: "42px",
          },
          ".subline": {
            fontSize: "14px",
          },
        },
        ".subline": {
          maxWidth: "540px",
          textAlign: "center",
        },
      })}
    >
      {/* <LogoContainer>
        <img src="/vite.svg" alt="logo" />
      </LogoContainer> */}
      <CustomTypography
        className="headline"
        fontSize={"86px"}
        color={"#c2c2c2"}
      >
        I'm&nbsp;<b>Ebenezer</b>
      </CustomTypography>
      <CustomTypography className="subline" fontSize={"26px"} color="#c2c2c2">
        a Full Stack Developer with over 3 years of experience specializing in
        the MERN stack + TypeScript
      </CustomTypography>
      <ButtonGroup>
        <CtaButton
          startIcon={<FaLinkedinIn />}
          onClick={() => {
            window.open("https://www.linkedin.com/in/ebenezer-j", "_blank");
          }}
          sx={{
            padding: "12px 24px",
          }}
        >
          <CustomTypography>Get In Touch</CustomTypography>
        </CtaButton>
        <CustomButton
          sx={{
            padding: "12px 24px",
          }}
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/resume", {
              replace: false,
              preventScrollReset: true,
            });
            // window.open(ResumePdf, "_blank");
          }}
        >
          <CustomTypography>See My Resume</CustomTypography>
        </CustomButton>
      </ButtonGroup>
    </PageContainer>
  );
};

export default HomePage;

const ButtonGroup = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "42px",
  gap: "32px",
  [theme.breakpoints.down(420)]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    "& button": {
      minWidth: "100%",
      maxWidth: "100%",
    },
  },
}));

// const LogoContainer = styled("div")({
//   height: "60px",
//   img: {
//     height: "100%",
//   },
// });
