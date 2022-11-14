import { createTheme } from '@mui/material/styles';
import { basePalette } from './palette';
import { baseTypography } from './typography';
import { componentOverrides } from './overrides';
import '@fontsource/noto-sans';

const theme = createTheme({
  palette: basePalette,
  typography: baseTypography,
  shape: {
    borderRadius: 6,
  },
  components: {
    ...componentOverrides,
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local(Noto Sans);
        }
      `,
    },
  },
});

export default theme;
