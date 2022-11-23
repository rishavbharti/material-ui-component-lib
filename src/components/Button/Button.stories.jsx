import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'React.ReactNode',
      },
    },
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
