// Services page

import ServiceCard from '@/components/ServiceCard'
import { services } from '@/constants'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section id='services'>
        <div className='container w-full h-fit flex flex-col text-center p-10 gap-10 pt-30'>
            <h1 className='heading3'>Harness the potenetial of our customized AI development services.</h1>
            <p>Achieve greater accuracy, efficiency, and automation in business processes, leading to improved decision-making, enhanced customer experiences, and competitive advantages in your respective industry.. Explore our range of custom AI development services designed to meet your specific needs.</p>

            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}

      </div>
        </div>
    </section>
  )
}

export default Services