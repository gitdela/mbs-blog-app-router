// 'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { Categories } from '@/lib/types';
import moment from 'moment';
import _ from 'lodash';
import apiRoutes from '@/app/lib/apiRoutes';
import axios from 'axios';
import Pagination from '../components/pagination';


interface Props {
  category?: string;
  limit?: string;
  offset?: string;
}

const getAllPosts = async (category?: string, limit?: string, offset?: string) => {
  const res = await axios.get(apiRoutes.allPosts, {
    params: {
      category,
      limit: Number(limit) ?? 9,
      offset: Number(offset) ?? 0
    }
  });

  if (!res) {
    throw new Error('Failed to fetch')
  }
  return res.data
}


const FilterBlog = async ({ category, limit, offset }: Props) => {
  const blogPosts: any = await getAllPosts(category, limit, offset);

  return (
    <section className='px-4 min-h-screen'>

      <div className='max-w-6xl mx-auto '>
        <div className='grid md:grid-cols-3 gap-6' id='scroll-position'>
          {blogPosts?.results?.map((post: any, i: number) => (
            <Link
              href={{
                pathname: `/blog/${post?.id}`, // add a path parameter with the id of the post
                query: { blog_id: post.id }, // then append another query parameter blod_id with the post id
              }}
              key={i}
              className='flex flex-col flex-grow-1 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out'
            >
              <div className='w-full'>
                <Image
                  src={post?.image_url ?? ''}
                  width={700}
                  height={30}
                  alt='featured'
                  className='h-56 w-full object-cover rounded-lg'
                />
              </div>
              <div className='flex flex-col justify-between px-2 pb-6 rounded-b-lg'>
                <ul className='flex text-xs text-primary-500 pt-1 gap-3 flex-wrap'>
                  {post?.categories.slice(0, 2).map((tag: any, i: number) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <span className='text-lg font-semibold md:text-lg text-primary-500 pt-5 pb-2'>
                  {_.truncate(post?.title, { length: 60 })}
                </span>
                <p className='text-sm pb-4'>
                  {_.truncate(post?.snippet, {
                    length: 80,
                  })}
                </p>
                <span className='text-gray-500 text-xs'>
                  {moment(post?.created_at).format('LL')}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className='py-6'>
          <Pagination
            totalPosts={Number(blogPosts?.results.length)}
            // nextPage={nextPage}
            // previousPage={previousPage}
            limit={9}
          // offset={offset}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterBlog;
