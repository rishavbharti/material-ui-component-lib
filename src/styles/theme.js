import { createTheme } from '@mui/material/styles';
import { basePalette } from './palette';
import { componentOverrides } from './overrides';
import '@fontsource/noto-sans';

const theme = createTheme({
  palette: basePalette,
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
  typography: {
    fontFamily: 'Noto Sans',
  },
});

export default theme;
