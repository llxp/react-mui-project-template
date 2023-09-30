import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import DrawerContent from "./drawer-content";
import Drawer from "@mui/material/Drawer";
import { useTranslation } from "react-i18next";
import routes, { NavItem } from "../../routes";
import { Link, useLocation } from "react-router-dom";
import ThemeSelector from "./theme-selector";

export interface ButtonAppBarProps {
    children: React.ReactNode;
    title: string;
}

export default function ButtonAppBar(props: ButtonAppBarProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { t } = useTranslation();
    
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const useCurrentPath = () => {
      const location = useLocation();
      // match against routes array
      const route = routes.find((route) => location.pathname === route.path);
    
      return route
    }

    const currentPath = useCurrentPath();
    
    const drawerWidth = 240;

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
      <>
        <AppBar component="header">
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {/*display a button to toggle light and dark mode*/}
            <ThemeSelector />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t(props.title)}
            </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.filter((route: NavItem) => route.showInHeader).map((item) => (
              <Button key={item.title} sx={{ color: '#fff' }} component={Link} to={item.path || ""}>
                {t(item.title)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerContent handleDrawerToggle={handleDrawerToggle} navItems={routes.filter((route: NavItem) => route.showInDrawer)} title={currentPath?.title || ""}/>
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        {props.children}
      </Box>
    </>
  );
}