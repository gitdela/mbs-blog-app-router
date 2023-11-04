import React from 'react';
import Featured from './featured';
import FilterBlog from './filterblog';
import Subscribe from './subscribe';
// import { useAllPosts } from '@/app/lib/posts';

const Home = async () => {
  // fetching all posts
  // const { allPosts: blogPosts, isLoading } = useAllPosts(
  //   limit,
  //   offset,
  //   selectedCategory as string
  // );
  return (
    <>
      <Featured />
      <FilterBlog />
      <Subscribe />
    </>
  );
};

export default Home;
