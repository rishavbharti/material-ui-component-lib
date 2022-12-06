import React from 'react';
import PropTypes from 'prop-types';

import TickMarkIcon from './icons/TickMark';
import CheckBoxIcon from './icons/CheckBox';
import CheckBoxOutlineBlankIcon from './icons/CheckBoxOutlineBlank';
import CheckCircleIcon from './icons/CheckCircle';
import CheckCircleOutlineBlankIcon from './icons/CheckCircleOutlineBlank';

const Icon = (props) => {
  const { name, color, fontSize, sx } = props;

  const renderIcon = () => {
    switch (name) {
      case 'tick_mark':
        return <TickMarkIcon color={color} fontSize={fontSize} sx={sx} />;
      case 'checkbox':
        return <CheckBoxIcon color={color} fontSize={fontSize} sx={sx} />;
      case 'checkbox_outline':
        return <CheckBoxOutlineBlankIcon color={color} fontSize={fontSize} sx={sx} />;
      case 'checkcircle':
        return <CheckCircleIcon color={color} fontSize={fontSize} sx={sx} />;
      case 'checkcircle_outline':
        return <CheckCircleOutlineBlankIcon color={color} fontSize={fontSize} sx={sx} />;

      default:
        return <></>;
    }
  };

  return renderIcon();
};

// Add name of any new icons to this array for making it available for selection in Storybook
export const ICON_NAMES = [
  'tick_mark',
  'checkbox',
  'checkbox_outline',
  'checkcircle',
  'checkcircle_outline',
];

Icon.propTypes = {
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
