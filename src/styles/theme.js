import { createTheme } from '@mui/material/styles';
import { basePalette } from './palette';
import { componentOverrides } from './overrides';

const theme = createTheme({
  palette: basePalette,
  components: componentOverrides,
});

export default theme;
