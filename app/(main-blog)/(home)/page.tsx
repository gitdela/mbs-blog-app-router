import React from 'react';
import Featured from './featured';
import FilterBlog from './filterblog';
import Subscribe from './subscribe';
import apiRoutes from '@/app/lib/apiRoutes';
// import { useAllPosts } from '@/app/lib/posts';

const getAllPosts = async () => {
  const res = await fetch(apiRoutes.allPosts);
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(apiRoutes.getCategories);
  return res.json();
};

const Home = async () => {
  const posts = await getAllPosts();
  const categories = await getCategories();
  return (
    <>
      <Featured />
      <FilterBlog posts={posts} categories={categories} />
      <Subscribe />
    </>
  );
};

export default Home;
