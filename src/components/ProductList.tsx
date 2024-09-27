import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href="/test" className='w-full flex flex-col gap-4'>
      <div className='relative w-full h-80'>
      <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt='' fill sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'/>
      <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt='' fill sizes='25vw'/>
      </div> 
      </Link>
    </div>
  )
}

export default ProductList
