import Drawer from "@mui/material/Drawer";
import DrawerContent from "./drawer-content";
import NavItem from "../../nav-item";
import { useLocation } from "react-router-dom";

export interface MobileDrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  routes: NavItem[];
}

export default function MobileDrawer(props: MobileDrawerProps) {
  const { mobileOpen, handleDrawerToggle, routes } = props;
  const container = window !== undefined ? () => window.document.body : undefined;
  const drawerWidth = 240;
  const useCurrentPath = () => {
    const location = useLocation();
    // match against routes array
    const route = routes.find((route) => location.pathname === route.path);
  
    return route
  }

  const currentPath = useCurrentPath();
  
  return (
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
  )
}