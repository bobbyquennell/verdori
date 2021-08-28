import { ClassValue } from 'clsx';
import {
  AllHTMLAttributes,
  createElement,
  ElementType,
  forwardRef,
} from 'react';

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'className'> {
  component?: ElementType;
  className?: ClassValue;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', ...props }, ref) => {
    return createElement(component, { ...props, ref });
  },
);

Box.displayName = 'Box';
