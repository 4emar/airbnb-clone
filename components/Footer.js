import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 
        gap-y-10 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p>Referealls accepted</p>
        <p>4emar</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Marko Stojanović</p>
        <p>4emar</p>
        <p>Full Stack training</p>
        <p>Work on yourself</p>
        <p>Do what you love</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Nema kraj</p>
        <p>Mnogu opcii</p>
        <p>Treba da se namali</p>
      </div>
    </div>
  )
}

export default Footer

