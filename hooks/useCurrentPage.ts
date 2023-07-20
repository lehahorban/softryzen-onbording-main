import { routes } from '@/utils/routes';
import { useRouter } from 'next/router';

export const useCurrentPage = () => {
  const router = useRouter();
  const isHomePage = router.pathname === routes.HOME;
  const isNotFoundPage = router.pathname === routes.NOT_FOUND;

  return [isHomePage, isNotFoundPage];
};
