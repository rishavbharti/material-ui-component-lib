const shades = {
  20: '#E0E0E0',
  30: '#C6C6C6',
  40: '#A8A8A8',
  50: '#8D8D8D',
  60: '#6F6F6F',
  70: '#525252',
  80: '#393939',
  90: '#262626',
  100: '#161616', // rgba(22, 22, 22, 1)
  a24: 'rgba(22, 22, 22, 0.24)',
};

const gray = {
  ...shades,
  main: shades[100],
  light: shades[70],
};

export default gray;
