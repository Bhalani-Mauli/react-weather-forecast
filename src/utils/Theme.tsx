import React from "react";
import { ThemeProvider } from "styled-components";

interface PropType {
  children: React.ReactNode;
}

const theme = {
  colors: {
    darkblue: "#142d4c",
    darkblue1: "#0a1f38",
    dullblue: "#385170",
    dullblue1: "#566e8d",
    dullblue2: "#69819f",
    dullblue3: "#7890ae",
    lightaqua: "#9fd3c7",
    lightaqua1: "#78b4a6",
    cream: "#ececec",
    cream1: "#d5c8c8",
    calmgreen: "#00B290",
    calmgreen1: "#04d3ad",
    darkred: "#f11919",
    darkred1: "#f11919",
    lightred: "#eb3c3c",
    lightred1: "#ec2929",
  },
  fonts: ["Lucida Sans", "Lucida Sans Regular", "sans-serif", "Roboto"],
  fontSizes: {
    xxSmall: "0.7em",
    xSmall: "0.85em",
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = (props: PropType) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
