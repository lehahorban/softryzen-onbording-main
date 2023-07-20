import { FC } from 'react';
import Cube from '@/public/images/loader/cube.svg';
import { LoaderProps } from './Loader.props';

export const Loader: FC<LoaderProps> = ({ children }) => {
  return (
    <div>
      <div className="mx-auto mb-4 grid max-w-[28px] grid-cols-2 gap-0.5 text-white">
        <Cube width="12" height="12" className="animate-cube4" />
        <Cube width="12" height="12" className="animate-cube1" />
        <Cube width="12" height="12" className="animate-cube3" />
        <Cube width="12" height="12" className="animate-cube2" />
      </div>
      {children}
    </div>
  );
};
