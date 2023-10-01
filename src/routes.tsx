import NavItem from "./nav-item";
import Home from "./pages/home";
import ShieldIcon from '@mui/icons-material/Shield';
import HelpIcon from '@mui/icons-material/Help';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const routes = [
    // header links
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
    },
    // footer links displayed as buttons
    {
        label: "privacy",
        link: "https://mui.com",
        icon: <ShieldIcon />,
        showInFooter: true,
      },
      {
        label: "help",
        link: "https://mui.com",
        icon: <HelpIcon />,
        showInFooter: true,
      },
      {
        label: "github",
        link: "https://github.com",
        icon: <FontAwesomeIcon icon={faGithub} />,
        showInFooter: true,
      }
] as NavItem[];

export default routes;