import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ShieldIcon from '@mui/icons-material/Shield';
import HelpIcon from '@mui/icons-material/Help';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomIconButton from './custom-icon-button';
import Copyright from './copyright';

export default function StickyFooter() {
  return <Box
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
        {/*
        The footer contains a left text and a right text. The right part is aligned to the right with the flexGrow, while the left part is aligned to the left.
        */}
        <Copyright />
        <Box sx={{ flexGrow: 1 }} />
        <CustomIconButton label="privacy" link="https://mui.com">
          <ShieldIcon />
        </CustomIconButton>
        <CustomIconButton label="help" link="https://mui.com">
          <HelpIcon />
        </CustomIconButton>
        <CustomIconButton label="github" link="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
        </CustomIconButton>
      </Toolbar>
</Box>
}