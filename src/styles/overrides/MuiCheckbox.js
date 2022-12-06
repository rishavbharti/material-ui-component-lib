export const MuiCheckboxOverrides = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { checked, color, disabled, icontype } = ownerState;

      return {
        ...(disabled && {
          '.checkbox-outline': {
            fill: theme.palette[color][10],
            rect: {
              stroke: theme.palette[color][20],
            },
          },

          '.MuiSvgIcon-root': {
            fill: theme.palette[color][20],
          },
        }),

        ...(!checked && {
          '&:hover': {
            '.checkbox-outline': {
              fill: theme.palette[color][10],
              rect: {
                stroke: theme.palette[color].main,
              },
            },
          },
        }),

        ...(icontype === 'checkbox' && {
          '&:active': {
            '.MuiSvgIcon-root': {
              outline: `2px solid ${theme.palette[color][20]}`,
              borderRadius: '4px',
            },
          },
        }),

        ...(icontype === 'checkcircle' && {
          '&:active': {
            svg: {
              outline: `2px solid ${theme.palette[color][20]}`,
              borderRadius: '1.5rem',
            },
          },
        }),
      };
    },
  },
};
