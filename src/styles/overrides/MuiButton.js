import { baseTypography, fontSizes, fontWeights } from '../../styles/typography';

export const MuiButtonOverrides = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      boxShadow: 'none',
      '&:hover, &:focus, &:active': {
        boxShadow: 'none',
      },

      ...(ownerState.variant === 'outlined' &&
        ['secondary', 'error', 'warning', 'success'].includes(ownerState.color) && {
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color][10],
            color: theme.palette[ownerState.color].main,
            border: `1px solid ${theme.palette[ownerState.color].main}`,
          },
        }),
      ...(ownerState.variant === 'outlined' && {
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme.palette[ownerState.color].lighter,
          border: `1px solid ${theme.palette[ownerState.color].lighter}`,
        },
        '&:active': {
          backgroundColor: theme.palette[ownerState.color][10],
        },
        '&:focus-visible': {
          backgroundColor: theme.palette[ownerState.color][10],
          border: `2px solid ${theme.palette[ownerState.color].dark}`,
        },
      }),

      ...(ownerState.variant === 'contained' &&
        ['secondary', 'error', 'warning', 'success'].includes(ownerState.color) && {
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color].light,
          },
        }),
      ...(ownerState.variant === 'contained' && {
        '&:disabled': {
          color: theme.palette[ownerState.color].contrastText,
          backgroundColor: theme.palette[ownerState.color].lighter,
        },
        '&:active': {
          backgroundColor: theme.palette[ownerState.color].dark,
        },
        '&:focus-visible': {
          backgroundColor: theme.palette[ownerState.color].dark,
          border: `2px solid ${theme.palette[ownerState.color].lighter}`,
        },
      }),

      ...(ownerState.loading === 'true' &&
        ownerState.variant === 'contained' && {
          '&:hover, &:focus, &:active, &:disabled': {
            backgroundColor: theme.palette[ownerState.color].main,
            border: 'none',
          },
        }),
      ...(ownerState.loading === 'true' &&
        ownerState.variant === 'outlined' && {
          '&:hover, &:focus, &:active, &:disabled': {
            backgroundColor: 'transparent',
          },
        }),
    }),
    textPrimary: ({ theme, ownerState }) => ({
      '&:hover': {
        backgroundColor: theme.palette.primary.a08,
        color: theme.palette.primary.dark,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.a10,
        color: theme.palette.primary.dark,
      },
      '&:focus-visible': {
        backgroundColor: theme.palette.primary.a08,
        color: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.light}`,
      },
      '&:disabled': {
        color: theme.palette.primary.light,
      },
      ...(ownerState.loading === 'true' && {
        '&:hover, &:focus, &:active, &:disabled': {
          backgroundColor: 'transparent',
          border: 'none',
        },
      }),
    }),
    outlinedPrimary: ({ theme }) => ({
      '&:hover': {
        backgroundColor: theme.palette.primary.a08,
        color: theme.palette.primary[70],
        border: `1px solid ${theme.palette.primary[70]}`,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.a12,
      },
      '&:focus-visible': {
        backgroundColor: theme.palette.primary.a12,
        color: theme.palette.primary[60],
        border: `2px solid ${theme.palette.primary[60]}`,
      },
    }),
    outlinedSecondary: ({ theme }) => ({
      '&:active': {
        backgroundColor: theme.palette.secondary.a12,
      },
      '&:focus-visible': {
        backgroundColor: theme.palette.secondary.a12,
        border: `2px solid ${theme.palette.secondary.main}`,
      },
    }),
    containedPrimary: ({ theme }) => ({
      '&:active': {
        backgroundColor: theme.palette.primary[80],
      },
      '&:focus-visible': {
        backgroundColor: theme.palette.primary[80],
        border: `2px solid ${theme.palette.primary.lighter}`,
      },
    }),
    sizeLarge: ({ theme, ownerState }) => ({
      padding: theme.typography.pxToRem(12),
      ...baseTypography.button,

      minWidth: theme.typography.pxToRem(78),
      minHeight: theme.typography.pxToRem(48),

      ...(ownerState.icon && {
        padding: theme.typography.pxToRem(12),
        minWidth: theme.typography.pxToRem(48),
        minHeight: theme.typography.pxToRem(48),
      }),
    }),
    sizeMedium: ({ theme, ownerState }) => ({
      padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(12)}`,
      ...baseTypography.button,

      minWidth: theme.typography.pxToRem(78),
      minHeight: theme.typography.pxToRem(40),

      ...(ownerState.icon && {
        padding: theme.typography.pxToRem(10),
        minWidth: theme.typography.pxToRem(40),
        minHeight: theme.typography.pxToRem(40),
      }),
    }),
    sizeSmall: ({ theme, ownerState }) => ({
      padding: `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(12)}`,
      ...fontSizes['text-base'],
      fontWeight: fontWeights.semibold,

      minWidth: theme.typography.pxToRem(71),
      minHeight: theme.typography.pxToRem(32),

      ...(ownerState.icon && {
        padding: theme.typography.pxToRem(8),
        minWidth: theme.typography.pxToRem(32),
        minHeight: theme.typography.pxToRem(32),
      }),
    }),
  },
};
