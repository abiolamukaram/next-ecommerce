"use-client"
import Image from 'next/image'
import React from 'react'

const CardModal = () => {

    const cartItems = true

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
      <>
        <h2 className='text-xl font-bold'>Shopping Cart</h2>
        {/* LIST */}
        <div className='flex flex-col gap-8'>
          {/* ITEM */}
          <div className='flex gap-4'>
          <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt="" width={72} height={96} className='object-cover rounded-md'/>
          <div className='flex flex-col justify-between w-full'>
            {/* TOP */}
            <div className=''>
              {/* TITLE */}
              <div className='flex items-center justify-between gap-8'>
              <h3 className='font-semibold'>Product Name</h3>
              <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
              </div>
              {/* DESC */}
              <div className='text-sm text-gray-500'>Available</div>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-between text-sm'>
              <span className='text-gray-500'>Qty. 2</span>
              <span className='text-blue-500'>Remove</span>
            </div>
          </div>
        </div>
         {/* ITEM */}
         <div className='flex gap-4'>
          <Image src="https://img.freepik.com/free-photo/little-children-sports-basketball-active_53876-137704.jpg?t=st=1726776110~exp=1726779710~hmac=23c62b336933251833d492803af81f591a34e291764d11f180abb350e1917381&w=740" alt="" width={72} height={96} className='object-cover rounded-md'/>
          <div className='flex flex-col justify-between w-full'>
            {/* TOP */}
            <div className=''>
              {/* TITLE */}
              <div className='flex items-center justify-between gap-8'>
              <h3 className='font-semibold'>Product Name</h3>
              <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
              </div>
              {/* DESC */}
              <div className='text-sm text-gray-500'>Available</div>
            </div>
            <div className='text-sm flex justify-between'>
            <span className='text-gray-500'>Qty. 2</span>
            <span className='text-blue-500'>Remove</span>
            </div>
          </div>
        </div>
        </div>
        {/* BOTTOM */}
        <div className=''>
          <div className='flex items-center justify-between font-semibold'>
            <span>Subtotal</span>
            <span>$49</span>
          </div>
          <p className='text-gray-500 text-sm my-2'>
            Shipping and taxes calculated at checkout.
          </p>
          <div className='flex justify-between text-sm'>
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
            <button className='bg-black text-white rounded-md py-3 px-4 '>Checkout</button>
          </div>
        </div>
      </>
    )}
    </div>
  )
}

export default CardModal
