import React from 'react';
import { createSvgIcon } from '@mui/material/utils';

const CheckCircleIcon = createSvgIcon(
  <>
    <rect width="24" height="24" rx="12" />
    <path
      d="M18 7.5L9.75 15.75L6 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  'CheckCircle',
);

export default CheckCircleIcon;
