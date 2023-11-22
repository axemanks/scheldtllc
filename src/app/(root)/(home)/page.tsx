// Home Page
'use client';

import AboutUs from '@/app/sections/AboutUs';
import GetStarted from '@/app/sections/GetStarted';
import Hero from '@/app/sections/Hero';
import Services from '@/app/sections/Services';
import Video from '@/app/sections/Video';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';

const HomePage = () => {
  return (
    <main className='container flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <Video />
      <Hero />
      <Services />
      <GetStarted />
      <AboutUs />
    </main>
  );
};

export default HomePage;
