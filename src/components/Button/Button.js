import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import CircularProgress from '@mui/material/CircularProgress';

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

const Button = (props) => {
  const {
    showBadge,
    badgeContent,
    badgeVariant,
    badgeColor,
    badgeOverlap,
    loading,
    disabled,
    label,
    ...rest
  } = props;

  const isLoading = loading?.toString();
  const isDisabled = disabled || loading;

  const renderButton = () => {
    return (
      <MuiButton {...rest} loading={isLoading} disabled={isDisabled}>
        {loading ? (
          <LoadingIcon
            size={loadingIconSize[props.size]}
            buttonvariant={props.variant}
            color={props.color}
          />
        ) : (
          label || props.children
        )}
      </MuiButton>
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

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,

  showBadge: PropTypes.bool,
  badgeContent: PropTypes.node,
  badgeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disableElevation: true,
  disableRipple: true,
  badgeVariant: 'dot',
  badgeColor: 'error',
  badgeOverlap: 'rectangular',
};

export default Button;
