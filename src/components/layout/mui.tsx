import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useThemeStore } from "../header/theme-selector";
import createTheme from "@mui/material/styles/createTheme";
import getTheme from "../../theme";

export interface MUIProps {
    children: React.ReactNode;
}

export default function MUI(props: MUIProps) {
  const { children } = props;
  const currentMode = useThemeStore((state) => state.currentMode);
  const theme = createTheme(getTheme(currentMode));
  return <ThemeProvider theme={theme}>
  <CssBaseline />
  {children}
  </ThemeProvider>;
}