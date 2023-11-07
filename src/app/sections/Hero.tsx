import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='nav-padding w-full'>
      <div className='mx-auto mb-10 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Scheldt LLC new site is now live!
          </p>
        </div>
        {/* Banner */}
        <div className='flex-center relative min-h-[274px] w-full flex-col border rounded-xl bg-banner bg-cover bg-center text-center shadow-xl backdrop-blur transition-all '>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-gradient_blue-orange'>Scheldt LLC</h1>
          <p className='heading2 mb-1 text-center text-gradient_blue-orange'>Custom AI Software Solutions</p>
          <p>We create tailor-made applications and systems that are designed and developed to meet specific business needs using artificial intelligence technologies. Our solutions are crafted to address unique challenges and opportunities within an organization, incorporating machine learning, deep learning, and other AI techniques.</p>
        </div>

        

      </section>
  )
}

export default Hero