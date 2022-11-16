import React from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { CircularProgress } from '@mui/material';

import styled from '../../styles/styled';

const LoadingIcon = styled(CircularProgress)(({ theme, buttonvariant, color }) => ({
  color:
    buttonvariant === 'text' || buttonvariant === 'outlined'
      ? theme.palette[color].main
      : theme.palette.white.main,
}));

const loadingIconSize = {
  small: 12,
  medium: 15,
  large: 15,
};

const NexusButton = (props) => {
  const {
    showBadge,
    badgeContent,
    badgeVariant,
    badgeColor,
    badgeOverlap,
    loading,
    disabled,
    ...rest
  } = props;

  const isLoading = loading?.toString();
  const isDisabled = disabled || loading;

  const renderButton = () => {
    return (
      <Button {...rest} loading={isLoading} disabled={isDisabled}>
        {loading ? (
          <LoadingIcon
            size={loadingIconSize[props.size]}
            buttonvariant={props.variant}
            color={props.color}
          />
        ) : (
          props.children
        )}
      </Button>
    );
  };

  if (showBadge) {
    return (
      <Badge
        badgeContent={badgeContent}
        color={badgeColor}
        overlap={badgeOverlap}
        variant={badgeVariant}
      >
        {renderButton()}
      </Badge>
    );
  }

  return renderButton();
};

NexusButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disableElevation: true,
  disableRipple: true,
  badgeVariant: 'dot',
  badgeColor: 'error',
  badgeOverlap: 'rectangular',
};

export default NexusButton;
