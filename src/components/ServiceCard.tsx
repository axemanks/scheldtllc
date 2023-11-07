// Card to display the services

import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import Image from 'next/image'
import React from 'react'

type Props = {
    icon: React.ElementType;
    name: string;
    desc: string;
}

const ServiceCard = ({icon:Icon, name, desc}: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full h-max-fit max-sm:w-full items-center shadow-xl backdrop-blur transition-all rounded-xl p-5 bg-white">
        <Icon className="text-purple" />        
        <h1 className='mt-2 base-bold text-primary'>{name}</h1>
        <p className='mt-2 '>{desc}</p>
    </div>
  )
}

export default ServiceCard