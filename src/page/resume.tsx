import CustomTypography from "@components/typography";
import { styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const ResumePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("../", {
      replace: true,
    });
  };

  return (
    <Container>
      <div className="back__bar">
        <LuArrowLeft
          onClick={handleBack}
          size={"32px"}
          color="white"
          cursor="pointer"
        />
        <CustomTypography>Go Back</CustomTypography>
      </div>
      <iframe
        loading="lazy"
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfyPyeGXY&#x2F;PR-B7QXkuEUPRFn1rB62IQ&#x2F;view?embed"
        allowFullScreen={true}
        allow="fullscreen"
      />
    </Container>
  );
};

export default ResumePage;

const Container = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
  top: 0,
  "& .back__bar": {
    width: "100%",
    height: "80px",
    position: "absolute",
    top: 0,
    left: 0,
    gap: "12px",
    zIndex: zIndex.fab * 10,
    backgroundColor: "##0d1216",
    display: "flex",
    alignItems: "center",
    padding: "0px 24px",
    transition: "all .2s",
  },
  "& iframe": {
    width: "100%",
    height: "100%",
    paddingTop: "80px",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: zIndex.fab,
    border: "none",
    outline: "none",
  },
});
