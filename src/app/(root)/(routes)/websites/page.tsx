// This will have a list of website templates

import React from 'react'

type Props = {}

const WebsitesPage = (props: Props) => {
  return (
    <div className='container nav-padding h-screen w-full carbon flex flex-col '>
      <div className='text-center border rounded-xl'>        
      <h1>Website Templates</h1>
      <p>We offer templates as a starting point to customize to your business</p></div>

      {/* map out websiteCards */}
      <div className='flex justify-center align-middle text-center gap-10 pt-10'>
        Website cards
      </div>
    </div>
  )
}

export default WebsitesPage