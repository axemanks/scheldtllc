// this is the card component for the about us page

import React from 'react';

type Props = {
  icon: React.ElementType;
  title: string;
};

const AboutUsCard = ({ icon: Icon, title }: Props) => {
  return (
    <div className='flex flex-1 flex-col w-full  max-sm:w-full items-center shadow-xl backdrop-blur transition-all rounded-xl p-5 bg-white dark:bg-black-100 border-b-2 border-primary '>
       <div className='flex  items-center w-full h-1/4 bg-about bg-cover bg-no-repeat justify-center align-middle'>
      <Icon className='text-primary ' />
      </div>
      <h1 className='mt-2 base-regular text-center'>{title}</h1>
    </div>
  );
};

export default AboutUsCard;
