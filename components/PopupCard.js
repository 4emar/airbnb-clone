import Image from 'next/image'
import React from 'react'
import { StarIcon } from "@heroicons/react/solid"

function PopupCard({ result }) {
  return (
    <div>
      <div className='relative h-36 w-60 flex-shrink-0'>
        <Image src={result.img} layout='fill' objectFit='cover' className='rounded-2xl' />
      </div>
      <div className='mt-2'>
        <div className='flex justify-between space-x-1'>
            <p className='font-semibold'>{result.title}</p>
            <div className='flex items-center'>
                <StarIcon className='h-4'/>
                <p>{result.star}</p>
            </div>
        </div>
        <p className='font-semibold'>{result.price}</p>
      </div>
    </div>
  )
}

export default PopupCard
