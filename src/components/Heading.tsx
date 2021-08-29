import React, { ReactNode } from 'react';
import { Box } from './Box';

type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
}

export const Heading = ({ level = '1', children }: HeadingProps) => {
  return <Box component={`h${level}`}>{children}</Box>;
};
