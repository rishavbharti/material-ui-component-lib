import { createStyled } from '@mui/system';
import theme from './theme';

const styled = createStyled({ defaultTheme: theme, rootShouldForwardProp: true });

export default styled;
