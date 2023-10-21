// Navbar

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DarkModeToggle } from './DarkModeToggle'
import { Button } from './ui/button'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-primary/20 py-7 text-white drop-shadow-xl'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        {/* Items in navBar */}
        <Link href='/'>
          <Image
          src='/logo.png'
          alt='logo'
          width={55}
          height={55}
          />
        </Link>
        <p className='text-blue-500 text-gradient_blue-purple font-bold text-2xl'>Scheldt LLC</p>
        {/* Hamburger Menu on small devices*/}
        <Image
        src="/hamburger-menu.svg"
        alt='hamburger menu'
        width={30}
        height={30}
        className='block sm:hidden'
        />
        {/* Links */}
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple font-bold'>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Button variant="default">Home</Button>
          </li>


        </ul>

        {/* Darkmode Toggle */}
        <div>
          <DarkModeToggle />
        </div>

      </div>
    </nav>
  )
}

export default Navbar