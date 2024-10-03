import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      {/* transitioning two pictures in one card */}
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
      <div className='relative w-full h-80'>
      <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt='' fill sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'/>
      <Image src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='25vw'/>
      </div> 
      <div className='flex justify-between'>
        <span className='font-medium '>Product Name</span>
        <span className='font-semibold'>$49</span>
      </div>
      <div className='text-sm text-gray-500'>My description</div>
      <button className='rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-sm w-max hover:bg-primaryColor hover:text-white'>Add to Cart</button>
      </Link>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
      <div className='relative w-full h-80'>
      <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt='' fill sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'/>
      <Image src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='25vw'/>
      </div> 
      <div className='flex justify-between'>
        <span className='font-medium '>Product Name</span>
        <span className='font-semibold'>$49</span>
      </div>
      <div className='text-sm text-gray-500'>My description</div>
      <button className='rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-sm w-max hover:bg-primaryColor hover:text-white'>Add to Cart</button>
      </Link>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
      <div className='relative w-full h-80'>
      <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt='' fill sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'/>
      <Image src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='25vw'/>
      </div> 
      <div className='flex justify-between'>
        <span className='font-medium '>Product Name</span>
        <span className='font-semibold'>$49</span>
      </div>
      <div className='text-sm text-gray-500'>My description</div>
      <button className='rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-sm w-max hover:bg-primaryColor hover:text-white'>Add to Cart</button>
      </Link>
      <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
      <div className='relative w-full h-80'>
      <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt='' fill sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'/>
      <Image src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='25vw'/>
      </div> 
      <div className='flex justify-between'>
        <span className='font-medium '>Product Name</span>
        <span className='font-semibold'>$49</span>
      </div>
      <div className='text-sm text-gray-500'>My description</div>
      <button className='rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-sm w-max hover:bg-primaryColor hover:text-white'>Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList
