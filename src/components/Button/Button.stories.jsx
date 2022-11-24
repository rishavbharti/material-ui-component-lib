import React from 'react';
import Button from './Button';
import { ICON_NAMES } from '../Icon';
import { COLOR_TYPES } from '../../styles/palette';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'select', options: COLOR_TYPES },
    icon: { control: 'select', options: ICON_NAMES },
    startIcon: { control: 'select', options: ICON_NAMES },
    startIconColor: { control: 'select', options: COLOR_TYPES },
    endIcon: { control: 'select', options: ICON_NAMES },
    endIconColor: { control: 'select', options: COLOR_TYPES },
    badgeColor: { control: 'select', options: COLOR_TYPES },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  label: 'Button',
  showBadge: true,
  badgeContent: 4,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'tick_mark',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: 'Button',
  startIcon: 'tick_mark',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  label: 'Button',
  endIcon: 'tick_mark',
};
