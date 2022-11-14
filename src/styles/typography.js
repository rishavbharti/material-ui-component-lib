export const fontFamilies = {
  sansSerif: '"Noto Sans", sans-serif',
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fontSizes = {
  'text-xs': {
    fontSize: '0.714rem' /* 10px */,
    lineHeight: '0.857rem' /* 12px */,
  },
  'text-sm': {
    fontSize: '0.857rem' /* 12px */,
    lineHeight: '1.143rem' /* 16px */,
  },
  'text-base': {
    fontSize: '1rem' /* 14px */,
    lineHeight: '1.429rem' /* 20px */,
  },
  'text-lg': {
    fontSize: '1.143rem' /* 16px */,
    lineHeight: '1.714rem' /* 24px */,
  },
  'text-xl': {
    fontSize: '1.429rem' /* 20px */,
    lineHeight: '1.714rem' /* 24px */,
  },
  'text-2xl': {
    fontSize: '1.714rem' /* 24px */,
    lineHeight: '2rem' /* 28px */,
  },
  'text-3xl': {
    fontSize: '2.286rem' /* 32px */,
    lineHeight: '2.857rem' /* 40px */,
  },
  'text-4xl': {
    fontSize: '2.571rem' /* 36px */,
    lineHeight: '3.143rem' /* 44px */,
  },
  'text-5xl': {
    fontSize: '3rem' /* 42px */,
    lineHeight: '3.714rem' /* 52px */,
  },
  'text-6xl': {
    fontSize: '4.571rem' /* 64px */,
    lineHeight: '5.714rem' /* 80px */,
  },
};

export const baseTypography = {
  fontFamily: fontFamilies.sansSerif,
  fontSize: 14,
  htmlFontSize: 14,
  fontWeightRegular: fontWeights.regular,
  fontWeightMedium: fontWeights.medium,
  fontWeightSemibold: fontWeights.semibold,
  fontWeightBold: fontWeights.bold,
  display1: {
    ...fontSizes['text-6xl'],
    letterSpacing: 0,
  },
  display2: {
    ...fontSizes['text-5xl'],
    letterSpacing: 0,
  },
  h1: {
    ...fontSizes['text-4xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  h2: {
    ...fontSizes['text-3xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  h3: {
    ...fontSizes['text-3xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  h4: {
    ...fontSizes['text-2xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  h5: {
    ...fontSizes['text-xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  h6: {
    ...fontSizes['text-lg'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  body1: {
    ...fontSizes['text-lg'],
    letterSpacing: 0,
  },
  body2: {
    ...fontSizes['text-base'],
    letterSpacing: 0,
  },
  body3: {
    ...fontSizes['text-sm'],
    letterSpacing: 0,
  },
  subtitle1: {
    ...fontSizes['text-lg'],
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  subtitle2: {
    ...fontSizes['text-base'],
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  label1: {
    ...fontSizes['text-base'],
    fontWeight: fontWeights.medium,
    letterSpacing: '0.1px',
  },
  label2: {
    ...fontSizes['text-sm'],
    fontWeight: fontWeights.medium,
    letterSpacing: '0.1px',
  },
  button: {
    textTransform: 'initial',
    ...fontSizes['text-lg'],
    fontWeight: fontWeights.semibold,
    letterSpacing: 0,
  },
  caption1: {
    ...fontSizes['text-sm'],
    fontWeight: fontWeights.bold,
    letterSpacing: '0.5px',
  },
  caption2: {
    ...fontSizes['text-xs'],
    fontWeight: fontWeights.semibold,
    letterSpacing: '0.5px',
  },
};
