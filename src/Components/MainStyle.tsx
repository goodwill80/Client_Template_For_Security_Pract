import React from 'react';
import { Stack } from '@mui/material';
import NavBar from './NavBar';

type ChildrenProps = {
  children: React.ReactNode;
};

function MainStyle({ children }: ChildrenProps) {
  return (
    <Stack>
      <NavBar />
      {children}
    </Stack>
  );
}

export default MainStyle;
