import Typography, { TypographyProps } from "@mui/material/Typography";
import useFluidTypography from "@hooks/fluid-typo";
import { capitalizeSentence } from "@utils/index";

type Props = TypographyProps & {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit";
  fontSize?: string;
};

const CustomTypography = ({ ...props }: Props) => {
  const size = useFluidTypography(`${props.fontSize}` || "16px");

  return (
    <Typography
      {...props}
      fontSize={size}
      sx={{
        display: "flex",
        alignItems: "center",
        ...props.sx,
        span: {
          fontWeight: "normal",
        },
      }}
    >
      {typeof props.children === "string"
        ? capitalizeSentence(props.children.toLowerCase().split("_").join(" "))
        : props.children}
    </Typography>
  );
};

export default CustomTypography;
