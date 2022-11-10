import primaryBlue from '../tokens/colors/primaryBlue';
import secondaryBlue from '../tokens/colors/secondaryBlue';
import red from '../tokens/colors/red';
import green from '../tokens/colors/green';
import orange from '../tokens/colors/orange';
import white from '../tokens/colors/white';
import gray from '../tokens/colors/gray';
import text from '../tokens/colors/text';

const baseMuiPalette = {
  primary: primaryBlue,
  secondary: secondaryBlue,
  error: red,
  warning: orange,
  success: green,
  mode: 'light',
  grey: gray,
  text,
  background: {
    paper: white[0],
    default: white[0],
  },
};

export const basePalette = {
  primaryBlue,
  secondaryBlue,
  red,
  green,
  orange,
  white,
  ...baseMuiPalette,
};
