import Box from "@mui/material/Box";
import NavItem from "../../nav-item";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export interface HeaderLinksProps {
    routes: NavItem[];
}

export default function HeaderLinks(props: HeaderLinksProps) {
  const { routes } = props;
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {routes.filter((route: NavItem) => route.showInHeader).map((item) => (
        <Button key={item.title} sx={{ color: '#fff' }} component={Link} to={item.path || ""}>
          {item.title}
        </Button>
      ))}
    </Box>
  )
}