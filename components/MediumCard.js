import Image from 'next/image'
import React from 'react'

function MediumCard({ img, title }) {
  return (
    <div className='cursor-pointer hover:scale-105 
        transition transform duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} layout='fill' className='rounded-lg'/>
        </div>
        <h3 className='mt-3 font-semibold'>{title}</h3>
    </div>
  )
}

export default MediumCard
