import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ButtonAppBar from "../header";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Footer from "../footer";
import getTheme from "../../theme";
import { useThemeStore } from "../header/theme-selector";

export interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const currentMode = useThemeStore((state) => state.currentMode);
    const defaultTheme = createTheme(getTheme(currentMode));
    return <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ButtonAppBar title={"Orderportal"}>
        {props.children}
      </ButtonAppBar>
      <Footer />
    </ThemeProvider>
}