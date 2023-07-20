import { FC } from 'react';
import { ItemProps } from './ItemProps.props';

export const Item: FC<ItemProps> = ({ text }) => {
  return (
    <li className="servicies servicies-icon flex items-center text-xl text-primary">
      {text}
    </li>
  );
};
