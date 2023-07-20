import { FC } from 'react';
import Image from 'next/image';

import { BrandCardProps } from './BrandCard.props';

export const BrandCard: FC<BrandCardProps> = ({
  image,
  name,
  width,
  height,
}) => {
  return (
    <div className="mx-auto flex min-h-[104px] w-[280px] items-center justify-center rounded-lg py-[27px] shadow-card duration-300 hover:shadow-card_hover xl:grayscale hover:xl:grayscale-0">
      <Image src={image} alt={name} width={width} height={height} />
    </div>
  );
};
