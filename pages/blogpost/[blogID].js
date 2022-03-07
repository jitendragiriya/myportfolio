import React from 'react'
import Head from 'next/head'
import AllBlogs from '../../components/blogs/AllBlogs';

const blog = () => {
  return (
    <>
      <Head>
        <title>blogs</title>
        <meta
          name="description"
          content="this is my personal blogs information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllBlogs />
    </>
  );
}
export default blog