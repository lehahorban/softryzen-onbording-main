export interface ContactsProps {
  data: {
    email: string;
    telegram: TelegramProps;
  };
}

interface TelegramProps {
  title: string;
  url: string;
}
