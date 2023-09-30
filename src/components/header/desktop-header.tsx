import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import NavItem from "../../nav-item";
import ThemeSelector from "./theme-selector";
import Typography from "@mui/material/Typography";
import HeaderLinks from "./header-links";

export interface DesktopHeaderProps {
  handleDrawerToggle: () => void;
  routes: NavItem[];
  title: string;
}

export default function DesktopHeader(props: DesktopHeaderProps) {
  const { handleDrawerToggle, routes, title } = props;
  const DrawerButton = () => {
    return (
      <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
    )
  }

  const TitleText = () => {
    return (
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
    )
  }

  return (
    <AppBar component="header">
      <Toolbar>
        {/*display a button to toggle the drawer on mobile*/}
        <DrawerButton />
        {/*display a button to toggle light and dark mode*/}
        <ThemeSelector />
        <TitleText />
        <HeaderLinks routes={routes}/>
      </Toolbar>
    </AppBar>
  )
}