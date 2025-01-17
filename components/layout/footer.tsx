import Link from 'next/link';

import GitHubIcon from 'components/icons/github';
import LogoIcon from 'components/icons/logo';
import VercelIcon from 'components/icons/vercel';
import { getMenu } from 'lib/saleor';
import { Menu } from 'lib/types';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="text-black bg-white border-t border-gray-700 dark:bg-black dark:text-white">
      <div className="w-full px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 py-12 transition-colors duration-150 border-b border-gray-700 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <a className="flex items-center flex-initial font-bold md:mr-24" href="/">
              <span className="mr-2">
                <LogoIcon className="h-8" />
              </span>
              <span>{SITE_NAME || 'site_name default'}</span>
            </a>
          </div>
          {menu.length ? (
            <nav className="col-span-1 lg:col-span-7">
              <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                {menu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <div className="col-span-1 text-black dark:text-white lg:col-span-2">
            <a aria-label="Github Repository" href="https://github.com/vercel/commerce">
              <GitHubIcon className="h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-6 pb-10 space-y-4 text-sm md:flex-row">
          <p>
            &copy; {copyrightDate} {SITE_NAME || 'site_name default'}. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-white dark:text-black">
            <span className="text-black dark:text-white">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-black dark:text-white"
            >
              <VercelIcon className="inline-block h-6 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
