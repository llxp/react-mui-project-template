import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import NavItem from "../../nav-item";
import DesktopHeader from "./desktop-header";
import MobileDrawer from "./mobile-drawer";

export interface HeaderProps {
    children: React.ReactNode;
    title: string;
    routes: NavItem[];
}

export default function Header(props: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { routes, title, children } = props;
  
  const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <DesktopHeader handleDrawerToggle={handleDrawerToggle} routes={routes} title={title}/>
      <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} routes={routes}/>
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </>
  );
}