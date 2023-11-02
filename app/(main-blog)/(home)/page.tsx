import React from 'react';
import Featured from './featured';
import FilterBlog from './filterblog';
import Subscribe from './subscribe';

const Home = () => {
  return (
    <>
      <Featured />
      <FilterBlog />
      <Subscribe />
    </>
  );
};

export default Home;
