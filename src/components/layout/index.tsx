import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Header from "../header";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Footer from "../footer";
import getTheme from "../../theme";
import { useThemeStore } from "../header/theme-selector";
import MainContent from "../main";

export default function Layout() {
  const currentMode = useThemeStore((state) => state.currentMode);
    const defaultTheme = createTheme(getTheme(currentMode));
    return <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header title={"Orderportal"}>
        <MainContent />
      </Header>
      <Footer />
    </ThemeProvider>
}