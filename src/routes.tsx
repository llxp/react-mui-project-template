import Home from "./pages/home";
// import react-router-dom types
import { PathRouteProps } from "react-router-dom";

export interface NavItem extends PathRouteProps {
    title: string;
    showInHeader?: boolean;
    showInDrawer?: boolean;
}

const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'home',
        showInHeader: true,
        showInDrawer: true,
    },
    {
        path: '/about',
        element: <div>About</div>,
        title: 'about',
        showInHeader: true,
        showInDrawer: true,
    },
    {
        path: '/contact',
        element: <div>Contact</div>,
        title: 'contact',
        showInHeader: true,
        showInDrawer: true,
    }
] as NavItem[];

export default routes;