import Link from 'next/link';
import React from 'react'

const AllBlogs = () => {
  return (
    <div className='h-[calc(100vh-4rem)] bg-green-400 flex flex-col items-center justify-center px-4'>
      <h1 className='text-3xl font-bold capitalize text-white md:text-5xl'>here is nothing in blogs</h1>
      <p className='text-2xl my-2 text-black font-medium text-center'>be patient blogs will be posted soon...</p>
      <Link href={'/'}>
          <a className='rounded py-1 px-4 bg-orange-600 text-white'>Back To Home</a>
      </Link>
    </div>
  );
}

export default AllBlogs