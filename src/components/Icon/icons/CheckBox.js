import React from 'react';
import { createSvgIcon } from '@mui/material/utils';

const CheckBoxIcon = createSvgIcon(
  <>
    <rect width="24" height="24" rx="4" />
    <path
      d="M18.6663 7L9.49967 16.1667L5.33301 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  'CheckBox',
);

export default CheckBoxIcon;
