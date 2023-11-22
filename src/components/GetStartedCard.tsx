// the cards for the 4 get started items

import React from 'react'

type Props = {
    number: number;
    title: string;
    desc: string;
}

const GetStartedCard = ({number, title, desc}: Props) => {
  return (
    <div className='flex flex-1 flex-col w-full h-max-fit max-sm:w-full items-center shadow-xl backdrop:blur transistion-all rounded-xl p-5 gap-5 dark:bg-black-100 '>
        <h1 className='heading1 text-gradient_blue '>{number}</h1>
        <h2 className='heading4'>{title}</h2>
        <p className='body-text'>{desc}</p>
    </div>
  )
}

export default GetStartedCard