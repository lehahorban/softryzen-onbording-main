import { FC } from 'react';

import { ContactsProps } from './Contacts.props';

import Mail from '@/public/images/mail.svg';
import Telegram from '@/public/images/telegram.svg';

export const Contacts: FC<ContactsProps> = ({ data }) => {
  return (
    <>
      <h2 className="mb-7 hidden text-2xl font-semibold md:block">Контакти</h2>

      <div className="flex flex-col gap-4 md:gap-7">
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-4 text-xl font-light duration-300 hover:text-primary hover:outline-primary focus:text-primary focus:outline-primary notXl:text-primary"
        >
          <Mail className="inline h-6 w-6 text-current" />
          {data.email}
        </a>

        <a
          href={data.telegram.url}
          target="_blank"
          rel="noopener nofollow noreferrer"
          className="flex items-center gap-4 text-xl font-light duration-300 hover:text-primary hover:outline-primary focus:text-primary focus:outline-primary notXl:text-primary"
        >
          <Telegram className="inline h-6 w-6 text-current" />
          {data.telegram.title}
        </a>
      </div>
    </>
  );
};
