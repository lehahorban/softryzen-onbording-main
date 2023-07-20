import { FC } from 'react';
import cn from 'classnames';
import { CardWrapperProps } from './CardWrapper.props';

export const CardWrapper: FC<CardWrapperProps> = ({
  hovered = true,
  tag,
  children,
  className,
  ...props
}) => {
  const Tag = tag ?? 'li';

  return (
    <Tag
      className={cn(
        'rounded-lg shadow-card',
        {
          'hover:card_hover': hovered,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
