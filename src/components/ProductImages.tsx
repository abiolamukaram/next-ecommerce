"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { url } from 'inspector';


const images = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1675183690347-662b2f9f3cf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/1124742827/photo/happy-curly-boy-laughing-and-holding-skateboard.jpg?s=1024x1024&w=is&k=20&c=QKD1S4E7zy-eN9xV6PdEhNpLLTBUC0zWnYlhPX-6t6w="
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1292415309/photo/funny-girl-on-pink-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=G2E5WBeL33U1CDCx1gA9UKA3VYEGs_egTUBIgF9-hYI="
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/577350268/photo/smiling-little-boy-with-big-backpack-jumping-and-having-fun.webp?a=1&b=1&s=612x612&w=0&k=20&c=oTQkPfnmEOFwwm51AIDXenRbHb_b-nJ97kNPdLhVNoQ="
  }
]

const ProductImages = () => {
  const [index,setIndex] = useState(0)
  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image src={images[index].url} alt='' fill sizes='50vw' className='object-cover rounded-md'/>
      </div>
      <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
        {images.map((img,i) => (
          <div className='w-1/4 h-32 relative gap-4 mt-8' key={img.id} onClick={() => setIndex(i)}>
          <Image src={img.url} alt='' fill sizes='30vw' className='object-cover rounded-md'/>
        </div>
        ))}
      
      </div>
    </div>
  )
}

export default ProductImages
