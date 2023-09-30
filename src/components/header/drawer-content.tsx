import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import NavItem from "../../nav-item";
import { Link } from "react-router-dom";

export interface DrawerContentProps {
  // handle drawer toggle
  handleDrawerToggle: () => void;
  // nav items
  navItems: NavItem[];
  // current page title
  title: string;
}

export default function DrawerContent(props: DrawerContentProps) {
  const { handleDrawerToggle, navItems } = props;
  return <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      {props.title}
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.title} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.path || ""}>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
}