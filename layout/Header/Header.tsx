import { FC, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import { BtnLink } from '@/components/button/BtnLink';
import { Logo } from '@/components/typography/Logo';
import { useCurrentPage } from '@/hooks/useCurrentPage';

import { MenuItemProps } from './Header.props';
import data from '@/data/header.json';

const HEIGHT_SCROLL = 20;

export const Header: FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isHomePage] = useCurrentPage();

  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleStickyNavbar = () => {
    if (window.scrollY >= HEIGHT_SCROLL) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  useEffect(() => {
    if (navbarOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isDesktop, navbarOpen]);

  return (
    <header
      className={`left-0 top-0 z-40 flex w-full items-center bg-transparent ${
        sticky
          ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition'
          : 'absolute shadow-header'
      }`}
    >
      <div className="container">
        <div
          className={cn(
            'relative -mx-5 flex items-center',
            isHomePage ? 'justify-between' : 'justify-center',
          )}
        >
          <div className="ml-5 max-w-[200px] md:ml-8">
            <Logo sticky={sticky} className="py-7 xl:py-8" />
          </div>

          {isHomePage && (
            <div className="flex w-full items-center justify-evenly">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="кнопка мобільного меню"
                  className="absolute right-2 top-1/2 block translate-y-[-50%] rounded-lg px-[6px] py-[6px] xl:hidden"
                >
                  <span
                    className={cn(
                      'relative my-1.5 block h-0.5 w-[26px] bg-primary transition-all duration-300 ',
                      navbarOpen ? ' top-[7px] rotate-45' : ' ',
                    )}
                  />
                  <span
                    className={cn(
                      'relative my-1.5 block h-0.5 w-[26px] bg-primary transition-all duration-300 ',
                      navbarOpen ? ' opacity-0' : ' ',
                    )}
                  />
                  <span
                    className={cn(
                      'relative my-1.5 ml-auto block h-0.5 w-[15px] bg-primary transition-all duration-300',
                      navbarOpen ? ' top-[-9px] w-[26px] -rotate-45' : ' ',
                    )}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={cn(
                    'navbar absolute right-0 top-0 z-30 w-full rounded bg-white px-6 py-16 duration-300 md:py-4 xl:visible xl:static xl:w-full xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 notXl:shadow-header smOnly:landscape:py-4 mdOnly:landscape:py-4',
                    navbarOpen
                      ? 'visibility top-full opacity-100'
                      : 'invisible top-[120%] opacity-0',
                  )}
                >
                  <ul className="flex flex-col gap-6 xl:mr-5 xl:flex-row xl:gap-8 notXl:mb-10">
                    {data.menuItems.map((menuItem: MenuItemProps) => (
                      <li key={menuItem.id} className="group relative">
                        <Link
                          activeClass="text-primary"
                          className="flex cursor-pointer whitespace-nowrap text-lg text-dark hover:outline-primary focus:outline-primary group-hover:text-primary xl:inline-flex xl:px-0 xl:py-6 notXl:justify-center"
                          href=""
                          duration={100}
                          offset={-50}
                          onClick={navbarToggleHandler}
                          smooth={true}
                          spy={true}
                          to={menuItem.url}
                        >
                          {menuItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <BtnLink
                    className="mx-auto md:hidden"
                    href={'program'}
                    onClick={navbarToggleHandler}
                    scroll
                    variant="ghost"
                  >
                    {data.btn}
                  </BtnLink>
                </nav>
              </div>
            </div>
          )}

          {isHomePage && (
            <BtnLink
              variant="ghost"
              href={'program'}
              scroll
              className="hidden md:ml-5 md:block md:text-center mdOnly:mr-20"
            >
              {data.btn}
            </BtnLink>
          )}
        </div>
      </div>
    </header>
  );
};
