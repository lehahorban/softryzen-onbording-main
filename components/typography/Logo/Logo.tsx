import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import LogoImg from '@/public/images/logo.svg';
import { LogoProps } from './Logo.props';
import { routes } from '@/utils/routes';

export const Logo: FC<LogoProps> = ({
  sticky,
  width = 176,
  height = 22,
  className,
}) => {
  return (
    <Link
      href={routes.HOME}
      className={cn(
        'block hover:outline-primary focus:outline-primary',
        { ['py-4']: sticky },
        className,
      )}
    >
      <LogoImg width={width} height={height} aria-label="Логотип сайту" />
    </Link>
  );
};
