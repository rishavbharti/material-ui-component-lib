export const MuiButtonOverrides = {
  defaultProps: { variant: 'contained', color: 'primary' },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      textTransform: 'initial',
      padding: '8px 12px',
      borderRadius: '6px',
      boxShadow: 'none',
      ...(ownerState.variant === 'contained' &&
        ownerState.color === 'primary' && {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }),
    }),
  },
};
