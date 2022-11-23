import React from 'react';
import PropTypes from 'prop-types';

import TickMarkIcon from './icons/TickMark';

const Icon = (props) => {
  const { name, color, fontSize, sx } = props;

  const renderIcon = () => {
    switch (name) {
      case 'tick_mark':
        return <TickMarkIcon color={color} fontSize={fontSize} sx={sx} />;

      default:
        return <></>;
    }
  };

  return renderIcon();
};

// Add name of any new icons to this array for making it available for selection in Storybook
export const ICON_NAMES = ['tick_mark'];

Icon.propTypes = {
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
