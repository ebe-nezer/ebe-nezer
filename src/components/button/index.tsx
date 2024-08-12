import { Button, ButtonProps } from "@mui/material";
import {
  error,
  info,
  primary,
  secondary,
  success,
  text,
} from "../../theme/color";
import CustomTypography from "@components/typography";

type Props = ButtonProps & {
  // Add custom props here
  color?: "primary" | "secondary" | "error" | "success" | "info";
};

const textColor = (color: string, disabled = false) => {
  switch (color) {
    case "primary":
      return primary["main"] + disabled ? "1a" : "";
    case "secondary":
      return text["heading"] + disabled ? "1a" : "";
    case "error":
      return error["dark"] + disabled ? "1a" : "";
    case "info":
      return info["main"] + disabled ? "1a" : "";
    case "success":
      return success["main"] + disabled ? "1a" : "";
    default:
      return primary["main"] + disabled ? "1a" : "";
  }
};

const backgroundColor = (color: Props["color"], disabled: boolean) => {
  switch (color) {
    case "primary":
      return primary["main"] + (disabled ? "aa" : "");
    case "secondary":
      return secondary["main"] + (disabled ? "aa" : "");
    case "error":
      return error["main"] + (disabled ? "aa" : "");
    case "info":
      return info["main"] + (disabled ? "aa" : "");
    case "success":
      return success["main"] + (disabled ? "aa" : "");
    default:
      return primary["main"] + (disabled ? "aa" : "");
  }
};

const CustomButton = ({
  color = "primary",
  variant = "contained",
  sx,
  ...props
}: Props) => {
  const bgColor = backgroundColor(color, !!props.disabled);
  const txtColor = textColor(color, !!props.disabled);
  const size = props.size;

  return (
    <Button
      sx={{
        // fontSize: 22,
        // fontFamily: "Satoshi-Regular",
        textTransform: "none",
        ...(variant === "text"
          ? {
              backgroundColor: "transparent",
              outlineWidth: 0,
              fontWeight: 600,
              border: "none",
              "& *": {
                color: txtColor,
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
            }
          : variant === "outlined"
          ? {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: bgColor,
              color: txtColor,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }
          : variant === "contained"
          ? {
              backgroundColor: bgColor,
              color: color === "secondary" ? txtColor : "white",
              "&:hover": {
                backgroundColor: bgColor,
              },
            }
          : {}),
        ...(size === "large"
          ? {
              padding: "12px 24px",
            }
          : size === "small"
          ? {
              padding: "8px 16px",
            }
          : {
              padding: "10px 20px",
            }),
        // borderRadius: "50px",
        ...sx,
      }}
      {...props}
      disableElevation={true}
      disableRipple={true}
      disableFocusRipple={true}
      disableTouchRipple={true}
    >
      {typeof props.children === "string" ? (
        <CustomTypography
          sx={{
            color: color === "secondary" ? txtColor : "white",
            fontWeight: 600,
          }}
        >
          {props.children}
        </CustomTypography>
      ) : (
        props.children
      )}
    </Button>
  );
};

export default CustomButton;
