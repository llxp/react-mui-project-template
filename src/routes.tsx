import Home from "./pages/home";
// import react-router-dom types
import { PathRouteProps } from "react-router-dom";

export interface NavItem extends PathRouteProps {
    title: string;
}

const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'home',
    },
    {
        path: '/about',
        element: <div>About</div>,
        title: 'about',
    },
    {
        path: '/contact',
        element: <div>Contact</div>,
        title: 'contact',
    }
] as NavItem[];

export default routes;