import React from 'react';
import Checkbox from './Checkbox';

import { COLOR_TYPES } from '../../styles/palette';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    color: { control: 'select', options: COLOR_TYPES },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    intermediate: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    icontype: { control: 'select', options: ['checkbox', 'checkcircle'] },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CheckCircle = Template.bind({});
CheckCircle.args = {
  icontype: 'checkcircle',
};
