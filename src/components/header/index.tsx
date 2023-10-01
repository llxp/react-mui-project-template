import React from "react";
import NavItem from "../../nav-item";
import DesktopHeader from "./desktop-header";
import MobileDrawer from "./mobile-drawer";

export interface HeaderProps {
    title: string;
    routes?: NavItem[];
}

export default function Header(props: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { routes, title } = props;
  
  const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <DesktopHeader handleDrawerToggle={handleDrawerToggle} routes={routes || []} title={title}/>
      <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} routes={routes || []}/>
    </React.Fragment>
  );
}