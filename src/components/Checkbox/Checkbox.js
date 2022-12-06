import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox } from '@mui/material';
import Icon from '../Icon';

const Checkbox = (props) => {
  const { icontype } = props;

  const iconName = icontype === 'checkcircle' ? 'checkcircle_outline' : 'checkbox_outline';
  const checkedIconName = icontype === 'checkcircle' ? 'checkcircle' : 'checkbox';

  return (
    <MuiCheckbox
      icon={<Icon name={iconName} />}
      checkedIcon={<Icon name={checkedIconName} color={props.color} />}
      {...props}
    />
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  intermediate: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  icontype: PropTypes.oneOf(['checkbox', 'checkcircle']),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
  value: PropTypes.any,
};

Checkbox.defaultProps = {
  disableRipple: true,
  color: 'primary',
  icontype: 'checkbox',
};

export default Checkbox;
