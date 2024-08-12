import zIndex from "@mui/material/styles/zIndex";
import { error, info, primary, secondary, success, text } from "./color";
import grey from "./color/grey";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const muiTheme = () => {
  return responsiveFontSizes(
    createTheme({
      spacing: () => 8,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
      direction: "ltr",
      shape: {
        borderRadius: 8,
      },
      components: {
        MuiChip: {
          styleOverrides: {
            root: {
              fontFamily: ["DM Sans", "sans-serif"].join(", "),
            },
            outlined: {
              fontFamily: ["DM Sans", "sans-serif"].join(", "),
              color: primary["main"],
              borderColor: primary["main"],
              backgroundColor: "transparent",
            },
          },
        },
        MuiModal: {
          styleOverrides: {
            root: {
              zIndex: zIndex.modal * zIndex.modal + 100000,
            },
          },
        },
        MuiSelect: {
          styleOverrides: {
            standard: {
              backgroundColor: "white",
            },
            select: {
              "&:focus": {
                backgroundColor: "transparent",
              },
            },
          },
        },
        MuiAutocomplete: {
          styleOverrides: {
            listbox: {
              background: "white",
            },
            noOptions: {
              backgroundColor: "white",
            },
            loading: {
              backgroundColor: "white",
            },
          },
        },
        MuiSlider: {
          styleOverrides: {
            root: {
              color: primary["main"],
            },
            thumb: {
              backgroundColor: primary["main"],
            },
            track: {
              color: primary["main"],
            },
            rail: {
              color: primary["light"],
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: "transparent",
              borderRadius: "0px",
              boxShadow: "none",
              "@media (max-width: 1280px)": {
                padding: "0px 80px", // Adjust padding for screens narrower than 1280px
              },
              "@media (max-width: 980px)": {
                padding: "0px 64px", // Adjust padding for screens narrower than 980px
              },
              "@media (max-width: 768px)": {
                padding: "0px 24px", // Adjust padding for screens narrower than 768px
              },
              "@media (max-width: 540px)": {
                padding: "0px 24px", // Adjust padding for screens narrower than 540px
              },
              "@media (max-width: 360px)": {
                padding: "0px 24px", // Adjust padding for screens narrower than 360px
              },
              "@media (max-width: 280px)": {
                padding: "0px 8px", // Adjust padding for screens narrower than 280px
              },
            },
            outlined: {
              borderRadius: "0px",
              border: "none",
              boxShadow: "none",
              padding: "0px 120px", // Default padding
              "@media (max-width: 1280px)": {
                padding: "0px 80px", // Adjust padding for screens narrower than 1280px
              },
              "@media (max-width: 980px)": {
                padding: "0px 64px", // Adjust padding for screens narrower than 980px
              },
              "@media (max-width: 768px)": {
                padding: "0px 24px", // Adjust padding for screens narrower than 768px
              },
              "@media (max-width: 540px)": {
                padding: "0px 24px", // Adjust padding for screens narrower than 540px
              },
              "@media (max-width: 360px)": {
                padding: "0px 24px", // Adjust padding for screens narrower than 360px
              },
              "@media (max-width: 280px)": {
                padding: "0px 8px", // Adjust padding for screens narrower than 280px
              },
            },
          },
        },
      },
      transitions: {
        easing: {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
        getAutoHeightDuration: (height: number) => {
          if (height > 600) {
            return 500;
          }
          return height / 2;
        },
      },
      zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
        fab: 1600,
      },
      palette: {
        primary: {
          ...primary,
        },
        secondary,
        error,
        text,
        grey: {
          ...grey,
          50: "#f5f5f5",
          100: "#eeeeee",
          200: "#e0e0e0",
          300: "#bdbdbd",
          400: "#9e9e9e",
          500: "#757575",
          600: "#616161",
          700: "#424242",
          800: "#212121",
          900: "#000000",
        },
        info: info,
        success: success,
        common: {
          black: "#000000",
          white: "#ffffff",
        },
        divider: primary["light"] + "33",
        contrastThreshold: 3,
        action: {
          active: primary["main"] + "aa",
          hover: primary["main"] + "aa",
          selected: primary["main"] + "aa",
          disabled: primary["main"] + "aa",
          disabledBackground: primary["main"] + "aa",
          disabledOpacity: 0.38,
          focus: primary["main"] + "aa",
          focusOpacity: 0.12,
          activatedOpacity: 0.12,
          hoverOpacity: 0.08,
          selectedOpacity: 0.08,
        },
        background: {
          default: "#ffffff",
          paper: primary["main"] + "aa",
        },
        mode: "light",
      },
      typography: {
        fontFamily: ["DM Sans", "sans-serif"].join(", "), // Satoshi is a custom font
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "56px",
          lineHeight: 1.167,
          color: text["heading"],
        },
        h2: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: 1.2,
          color: text["heading"],
        },
        h3: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: 1.167,
          color: text["heading"],
        },
        h4: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "26px",
          lineHeight: 1.235,
          color: text["subHeading"],
        },
        h5: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: 1.334,
          color: text["subHeading"],
        },
        h6: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: 1.6,
          color: text["paragraph"],
        },
        subtitle1: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: 1.75,
          color: text["paragraph"],
        },
        subtitle2: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: 1.57,
          color: text["paragraph"],
        },
        body1: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: 1.5,
          color: text["paragraph"],
        },
        body2: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: 1.43,
          color: text["paragraph"],
        },
        button: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: 1.75,
          textTransform: "uppercase",
          color: text["paragraph"],
        },
        caption: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: 1.66,
          color: text["paragraph"],
        },
        overline: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: 2,
          color: text["paragraph"],
        },
        htmlFontSize: 16,
        allVariants: {
          fontFamily: ["DM Sans", "sans-serif"].join(", "),
        },
      },
    }),
    { breakpoints: ["xs", "sm", "md", "lg", "xl"], factor: 5 }
  );
};
