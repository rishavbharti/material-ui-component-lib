const shades = {
  10: '#EFF4FB',
  20: '#C6D7F1',
  30: '#9DBAE7',
  40: '#749EDC',
  50: '#4B81D2',
  60: '#2F67BC',
  70: '#255193',
  80: '#1B3A6A', // rgba(27, 58, 106, 1)
  90: '#102340',
  100: '#060D18',
  a08: 'rgba(27, 58, 106, 0.08)',
  a10: 'rgba(27, 58, 106, 0.1)',
  a12: 'rgba(27, 58, 106, 0.12)',
};

const secondaryBlue = {
  ...shades,
  main: shades[80],
  light: shades[20],
  dark: shades[70],
};

export default secondaryBlue;
