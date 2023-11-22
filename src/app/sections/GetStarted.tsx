// The Get Started section

import React from 'react'
import { getStarted } from '../../constants/index';
import GetStartedCard from '@/components/GetStartedCard';

type Props = {}

const GetStarted = (props: Props) => {
  return (
    <section id='getStarted'>
        <div className='container w-full h-fit flex flex-col text-center p-10 gap-10  rounded-xl circuit'>
        <h1 className='heading2 text-primary'>
            Get Started Today!
        </h1>
        <p className='base-regular'>Get started today and unleash the incredible potential of AI</p>
        
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {getStarted.map((item) => (
            <GetStartedCard key={item.number} {...item} />
        ))}
        </div>
        </div>
    </section>
  )
}

export default GetStarted