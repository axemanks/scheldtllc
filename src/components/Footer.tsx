// Footer

import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='container text-primary flex-between body-text w-full gap-y-10 border-t border-primary/20  max-md:flex-col'>
      <p className=''>Copyright &copy; 2023 Scheldt LLC | All Rights Reserved</p>
      {/* Links */}
      <div className='flex gap-x-9'>
        <Link href='/'>Home</Link>
        <Link href='/terms-of-use'>Terms & Conditions</Link>
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>

    </footer>
  )
}

export default Footer