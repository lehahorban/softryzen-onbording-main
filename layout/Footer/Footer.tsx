import { FC } from 'react';
import { Link } from 'react-scroll';

import { IconLink } from '@/components/button/IconLink';
import { Logo } from '@/components/typography/Logo';

import Behance from '@/public/images/social/behance.svg';
import Instagram from '@/public/images/social/instagram.svg';
import Linkedin from '@/public/images/social/linkedin.svg';
import data from '@/data/footer.json';

import { MenuItemProps } from '../Header/Header.props';
import { Contacts } from '@/components/common/Contacts/Contacts';

import { useCurrentPage } from '@/hooks/useCurrentPage';

export const Footer: FC = () => {
  const [isHomePage, isNotFoundPage] = useCurrentPage();

  return (
    <footer className="bg-white py-10 xl:py-[60px]">
      {isHomePage || isNotFoundPage ? (
        <div className="container text-lg xl:flex xl:justify-between">
          <div>
            <div className="mb-7 mdOnly:flex mdOnly:justify-between">
              <div className="mb-7 smOnly:mx-auto">
                <Logo
                  className="mb-10 block w-[208px] md:mb-[72px] smOnly:mx-auto"
                  width={208}
                  height={26}
                />

                <div className="flex gap-5 xl:mb-10 smOnly:justify-center">
                  <IconLink
                    href={data.social.behance}
                    label="Посилання на Behance"
                    className="duration-300 hover:scale-110 focus:scale-110"
                  >
                    <Behance />
                  </IconLink>

                  <IconLink
                    href={data.social.instagram}
                    label="Посилання на Instagram"
                    className="duration-300 hover:scale-110 focus:scale-110"
                  >
                    <Instagram />
                  </IconLink>

                  <IconLink
                    href={data.social.linkedin}
                    label="Посилання на Linkedin"
                    className="duration-300 hover:scale-110 focus:scale-110"
                  >
                    <Linkedin />
                  </IconLink>
                </div>
              </div>

              <div className="block max-w-[280px] xl:hidden smOnly:mx-auto smOnly:text-center">
                <Contacts data={data.contacts} />
              </div>
            </div>

            <a
              href="/"
              className="mb-2 text-sm text-gray_light md:text-base notXl:block notXl:text-center"
            >
              Terms of Service & Privacy Policy
            </a>

            <p className="text-sm text-gray_light md:text-base notXl:text-center">
              &#169; {new Date().getFullYear()} &nbsp;
              {data.copyright}
            </p>
          </div>

          {isHomePage && (
            <div className="hidden xl:block">
              <h2 className="mb-7 text-2xl font-semibold">Меню</h2>

              <nav>
                <ul className="block xl:flex xl:flex-col xl:gap-5 ">
                  {data.edges.menuItems.map((menuItem: MenuItemProps) => (
                    <li key={menuItem.id} className="group relative">
                      <Link
                        className={`flex cursor-pointer flex-col text-lg text-gray_light duration-300 hover:outline-primary focus:outline-primary group-hover:text-primary group-focus:text-primary`}
                        href=""
                        offset={-50}
                        smooth={true}
                        to={menuItem.url}
                      >
                        {menuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          <div className="hidden xl:block">
            <Contacts data={data.contacts} />
          </div>
        </div>
      ) : (
        <div className="container flex justify-center">
          <p className="text-sm text-gray_light md:text-base notXl:text-center">
            &#169; {new Date().getFullYear()} &nbsp;
            {data.copyright}
          </p>
        </div>
      )}
    </footer>
  );
};
