import white from './white';

const shades = {
  10: '#E5F2FF',
  20: '#B3D7FF',
  30: '#80BCFF',
  40: '#4DA1FF',
  50: '#1A86FF',
  60: '#006CE5', // rgba(0, 108, 229, 1)
  70: '#0054B2',
  80: '#003C80',
  a08: 'rgba(0, 108, 229, 0.08)',
  a10: 'rgba(0, 108, 229, 0.1)',
  a12: 'rgba(0, 108, 229, 0.12)',
};

const primaryBlue = {
  ...shades,
  main: shades[60],
  light: shades[50],
  lighter: shades[20],
  dark: shades[70],
  darker: shades[80],
  contrastText: white[0],
};

export default primaryBlue;
