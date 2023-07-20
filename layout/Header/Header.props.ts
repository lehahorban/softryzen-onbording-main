import { Key, ReactFragment, ReactPortal } from 'react';

// export interface HeaderProps {
//   id: string;
//   name: string;
//   menuItems: MenuItemProps[];
// }

export interface MenuItemProps {
  id: Key | null | undefined;
  url: string;
  label:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}
