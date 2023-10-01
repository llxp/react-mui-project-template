import { ThemeOptions } from '@mui/material/styles';

// The themes are created using the mui theme creator: https://zenoo.github.io/mui-theme-creator

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

// export either lightTheme or darkTheme depending on the current theme mode
export default function getTheme(mode: string) {
  switch (mode) {
    case 'dark':
      return darkTheme;
      case 'light':
      return lightTheme;
    default:
      return lightTheme;
  }
};