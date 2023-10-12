// Home Page
"use client"

import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';




const HomePage = () => {

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        {/* Banner */}
        <div className='flex-center relative min-h-[274px] w-full flex-col border rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-black'>Scheldt LLC</h1>
          <p className='heading2 mb-1 text-center text-gradient_blue-orange'>Custom AI Software Solutions</p>
        </div>

      </section>
      
    </main>
  );
};

export default HomePage;
