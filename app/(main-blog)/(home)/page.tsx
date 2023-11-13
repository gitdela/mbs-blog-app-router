import React, { Suspense } from 'react';
import Featured from './featured';
import FilterBlog from './filterblog';
import Subscribe from './subscribe';
import FilterBar from './filterbar';

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    limit?: string;
    offset?: string;
  };
}) => {
  const category = searchParams?.category;
  const limit = searchParams?.limit;
  const offset = searchParams?.offset;

  console.log(category)

  return (
    <>
      <Featured />
      <FilterBar />
      <Suspense key={category} fallback={<div>Loading </div>}>
        <FilterBlog category={category} limit={limit} offset={offset} />
      </Suspense>
      <Subscribe />
    </>
  );
};

export default Home;
