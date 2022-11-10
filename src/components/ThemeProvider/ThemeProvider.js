import React from 'react';
import { ThemeProvider } from '@mui/material';

import theme from '../../styles/theme';

const NexusThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NexusThemeProvider;
