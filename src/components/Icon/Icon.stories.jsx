import React from 'react';

import Icon from './Icon';
import { COLOR_TYPES } from '../../styles/palette';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'select', options: COLOR_TYPES },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'tick_mark',
};
