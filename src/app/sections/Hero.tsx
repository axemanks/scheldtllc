import React from 'react';
import { heroSection } from '@/constants';

type Props = {
  title: string;
  subtitle: string;
  paragraphOne: string;
  paragraphTwo: string;
};

const Hero = ({ title, subtitle, paragraphOne, paragraphTwo }: Props) => {
  return (
    <section className='nav-padding w-full hero-height'>
      <div className='mx-auto mb-10 flex max-w-fit  items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className='text-sm font-semibold text-gray-700'>
          Scheldt LLC new site is now live!
        </p>
      </div>
      {/* Banner */}
      <div className='flex-center relative h-1/2 w-full flex-col border rounded-xl text-center shadow-xl backdrop-blur transition-all '>
        <h1 className='sm:heading1 heading2 mb-6 text-center text-gradient_blue-orange'>
          {heroSection.title}
        </h1>
        <p className='heading2 mb-1 text-center text-gradient_blue-orange'>
          {heroSection.subtitle}
        </p>

        <p>{heroSection.paragraphOne}</p>
        <p>{heroSection.paragraphTwo}</p>
      </div>
    </section>
  );
};

export default Hero;
