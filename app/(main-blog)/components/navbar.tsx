'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    return pathname === href
      ? 'bg-primary-500 text-white px-2 py-1 rounded'
      : '';
  };

  const [nav, setNav] = useState(true);
  const links = [
    {
      id: 1,
      link: 'start here',
      url: '/',
    },
    {
      id: 2,
      link: 'news',
      url: '/news',
    },
    {
      id: 3,
      link: 'courses',
      url: '/courses',
    },
  ];
  return (
    <div className='relative py-6 p-3'>
      <nav className='md:max-w-6xl mx-auto flex gap-8 justify-between items-center md:px-6'>
        <div className='flex items-center gap-4'>
          <Link href={'https://mybitstore.com'}>
            <Image
              src={'/assets/mybitstore-logo.svg'}
              alt='logo'
              height={50}
              width={150}
              className='h-auto w-auto'
            />
          </Link>
          <ul className='hidden md:flex justify-center items-center gap-4 text-sm'>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`capitalize whitespace-nowrap overflow-hidden ${isLinkActive(
                    link.url
                  )}`} // we call the function here with the link.url. the result is a class fed here
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden md:flex items-center justify-between gap-4'>
          <Link
            className='font-semibold whitespace-nowrap'
            href={'https://app.mybitstore.com'}
          >
            Log In
          </Link>
          <Link
            className='font-semibold px-3 p-2 rounded bg-primary-500 text-white whitespace-nowrap'
            href={'https://app.mybitstore.com/register'}
          >
            Create an account
          </Link>
        </div>
        <div
          className='md:hidden cursor-pointer z-20'
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
        {!nav && (
          <div className='absolute bg-zinc-100 px-4 py-6 top-4 right-2 w-3/4 z-10 rounded shadow md:hidden'>
            <div className='flex flex-col items-start justify-end gap-4'>
              <ul className='flex flex-col space-y-4'>
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className={`capitalize font-semibold whitespace-nowrap overflow-hidden cursor-pointer`}
                      onClick={() => setNav(!nav)} // we call the function here with the link.url. the result is a class fed here
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                className='font-semibold px-3 p-2 rounded bg-primary-500 text-white '
                href={'https://app.mybitstore.com'}
              >
                Log In
              </Link>
              <Link className='' href={'https://app.mybitstore.com/register'}>
                Create an account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
