import { ReactNode } from 'react';

export interface CardWrapperProps {
  tag?: 'li' | 'div';
  hovered?: boolean;
  className?: string;
  children: ReactNode;
}
