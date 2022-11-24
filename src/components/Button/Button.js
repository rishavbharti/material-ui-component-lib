import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import CircularProgress from '@mui/material/CircularProgress';

import Icon from '../../components/Icon';
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

const iconSize = {
  small: 16,
  medium: 20,
  large: 24,
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
    icon,
    startIcon,
    startIconColor,
    endIcon,
    endIconColor,
    ...rest
  } = props;

  const isLoading = loading?.toString();
  const isDisabled = disabled || loading;

  const _icon = icon && <Icon name={icon} sx={{ fontSize: iconSize[props.size] }} />;
  const _startIcon = startIcon && <Icon name={startIcon} color={startIconColor} />;
  const _endIcon = endIcon && <Icon name={endIcon} color={endIconColor} />;

  const renderButton = () => {
    return (
      <MuiButton
        {...rest}
        loading={isLoading}
        disabled={isDisabled}
        startIcon={_startIcon}
        endIcon={_endIcon}
        icon={icon}
      >
        {loading ? (
          <LoadingIcon
            size={loadingIconSize[props.size]}
            buttonvariant={props.variant}
            color={props.color}
          />
        ) : (
          _icon || label || props.children
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
  label: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,

  icon: PropTypes.string,
  startIcon: PropTypes.string,
  startIconColor: PropTypes.string,
  endIcon: PropTypes.string,
  endIconColor: PropTypes.string,

  showBadge: PropTypes.bool,
  badgeContent: PropTypes.node,
  badgeColor: PropTypes.string,
  badgeVariant: PropTypes.oneOf(['dot', 'standard', 'string']),
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disableElevation: true,
  disableRipple: true,
  badgeColor: 'error',
  badgeOverlap: 'rectangular',
};

export default Button;
