import React from 'react';
import Button from '@mui/material/Button';

const NexusButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default NexusButton;
