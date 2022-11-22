import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from '../../styles/theme';

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
