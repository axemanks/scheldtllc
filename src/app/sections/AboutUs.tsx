// The about us section will have a title and map out cards

import React from 'react';
import { aboutUs } from '@/constants';
import AboutUsCard from '@/components/AboutUsCard';

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section
      id='about-us'
      className='w-full h-[600px]'
    >
      <div className='flex flex-col justify-items-center p-10'>
        <h1 className='heading2 text-primary text-center'>Why Our Clients Trust Us</h1>
        {/* map out the about us cards */}
        <div className='mt-10 grid lg:grid-cols-5 ms:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {aboutUs.map((item) => (
            <AboutUsCard key={item.title} {...item} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
