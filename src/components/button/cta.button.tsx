import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps;

const CtaButton = ({ children, ...props }: Props) => {
  return (
    <Button
      {...props}
      disableRipple
      disableElevation
      disableFocusRipple
      disableTouchRipple
      sx={{
        background: `linear-gradient(180deg, rgb(25.50000037997961, 25.50000037997961, 25.50000037997961) 0%, rgb(19.12500075995922, 19.12500075995922, 19.12500075995922) 100%)`,
        backgroundImage: `0px 7px 4px #00000026 , inset 0px 2px 4px #ffffff14 , inset 0px 1px 2px #ffffff05`,
        textTransform: "none",
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CtaButton;
