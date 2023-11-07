// Navbar

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DarkModeToggle } from './DarkModeToggle'
import { Button } from './ui/button'
import {hamburger} from '../../public/icons'
import { navLinks } from '@/constants'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center container'>
        <a href='/'>
          <p>Logo</p>
          {/* <Image
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          /> */}
        </a>
        {/* links */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* image */}
        <div className='hidden max-lg:block'>
          <Image
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
          />
        </div>
        {/* Darkmode Toggle */}
        <div>
          <DarkModeToggle />
        </div>

      </nav>
    </header>
  );
};


export default Navbar