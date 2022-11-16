import white from './white';

const shades = {
  10: '#F9DFCC',
  20: '#F6CAAA',
  30: '#F1AF80',
  40: '#EC9555',
  50: '#E87B2B',
  60: '#E36000', // rgba(227, 96, 0, 1)
  70: '#BD5000',
  a08: 'rgba(227, 96, 0, 0.08)',
  a10: 'rgba(227, 96, 0, 0.1)',
  a12: 'rgba(227, 96, 0, 0.12)',
};

const orange = {
  ...shades,
  main: shades[60],
  light: shades[50],
  lighter: shades[20],
  dark: shades[70],
  contrastText: white[0],
};

export default orange;
