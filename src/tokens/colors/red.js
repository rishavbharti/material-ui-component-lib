const shades = {
  10: '#FFEBEE',
  20: '#FFCDD2',
  30: '#EF9A9A',
  40: '#E57373',
  50: '#EF5350',
  60: '#F44336', // rgba(244, 67, 54, 1)
  70: '#A32D24',
  a08: 'rgba(244, 67, 54, 0.08)',
  a10: 'rgba(244, 67, 54, 0.1)',
  a12: 'rgba(244, 67, 54, 0.12)',
};

const red = {
  ...shades,
  main: shades[60],
  light: shades[20],
  dark: shades[50],
};

export default red;
