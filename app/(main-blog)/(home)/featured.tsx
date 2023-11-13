import Image from 'next/image';
import Link from 'next/link';
// import { featuredPost } from '@/app/lib/posts';
import _ from 'lodash';
// import { Post } from '@/lib/types';
// import { featuredPosts } from '@/lib/posts';
// import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

import apiRoutes from '../../lib/apiRoutes';

export const featuredPost = async () => {
  const res = await fetch(apiRoutes.featuredPost);
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json();
};

const Featured = async () => {
  const featured = await featuredPost();

  // console.log(featured, 'feat')

  return (
    <div className='w-full'>
      <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
        <div className='bg-white w-full  mx-auto rounded-lg shadow grid md:grid-cols-2 gap-2'>
          <div className='flex flex-col justify-center gap-4 px-4 py-2 text-start'>
            <span className='font-light text-xs'>
              {moment(featured?.created_at).format('LL')}
            </span>
            <Link
              href={{
                pathname: `/blog/${featured?.id}`,
                query: { blog_id: featured?.id },
              }}
              className='capitalize text-xl md:text-3xl text-primary-500 font-bold'
            >
              {featured?.title}
            </Link>
            <p className='text-start font-light'>
              {_.truncate(featured?.snippet, {
                length: 500,
              })}
            </p>
            <Link href='' className='text-start text-sm text-primary-500'>
              Read more...
            </Link>
          </div>
          <div>
            <Image
              className=' h-74 object-cover w-full'
              src={featured?.image_url ?? ''}
              width={500}
              height={200}
              alt='featured'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
