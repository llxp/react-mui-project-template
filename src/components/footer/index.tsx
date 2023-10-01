import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Copyright from './copyright';
import FooterButtons from './footer-buttons';
import NavItem from '../../nav-item';

export interface FooterLink {
  label: string;
  link: string;
  icon: React.ReactNode;
}

export interface FooterProps {
  routes: NavItem[];
}

export default function Footer(props: FooterProps) {
  const { routes } = props;

  return (
    <Box
      component="footer"
      sx={{
        with: "100%",
        position: "fixed",
        height: "64px",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Toolbar>
        <Copyright />
        <Box sx={{ flexGrow: 1 }} />{/* push the buttons to the right */}
        <FooterButtons links={routes} />
      </Toolbar>
    </Box>
  );
}