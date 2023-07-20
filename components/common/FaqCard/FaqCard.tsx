import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { FaqCardProps } from './FaqCard.props';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import Plus from '@/public/images/faq/plus.svg';
import Minus from '@/public/images/faq/minus.svg';

export const FaqCard: FC<FaqCardProps> = ({
  question,
  answer,
  defaultIndex,
}) => {
  return (
    <Disclosure defaultOpen={defaultIndex}>
      {({ open }) => (
        <CardWrapper tag="div" className="mt-3 bg-white_light">
          <Disclosure.Button className="flex w-full items-center justify-between px-5 py-4 text-left text-xl font-semibold md:text-2xl">
            <span>{question}</span>
            {open ? (
              <Minus className="shrink-0" width="16px" height="16px" />
            ) : (
              <Plus className="shrink-0" width="16px" height="16px" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="px-5 pb-4 text-base font-normal">
            {answer}
          </Disclosure.Panel>
        </CardWrapper>
      )}
    </Disclosure>
  );
};
