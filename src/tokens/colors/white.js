const shades = {
  0: '#FFFFFF',
  10: '#FCFCFC',
  20: '#F5F5F5',
  30: '#F0F0F0',
  40: '#EBEBEB',
  50: '#DFDFDF',
};

const outline = {
  10: '#E8E8E8',
  20: '#DFDFDF',
  30: '#CFCFCF',
};

const white = {
  ...shades,
  ...outline,
  main: shades[0],
  light: shades[20],
};

export default white;
