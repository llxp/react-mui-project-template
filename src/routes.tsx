import NavItem from "./nav-item";
import Home from "./pages/home";

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