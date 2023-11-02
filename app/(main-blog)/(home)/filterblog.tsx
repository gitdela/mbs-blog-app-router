'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { Categories } from '@/lib/types';
import moment from 'moment';
import _ from 'lodash';

import { getCategories, useAllPosts } from '../../lib/posts';
import { useEffect, useState } from 'react';
// import NoNewsMessage from '@/components/NoNews';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { CheckIcon } from 'lucide-react';
// import { cn } from '@/utils';
import Loader from './loader';
import { useRouter } from 'next/navigation';
import Pagination from '../components/pagination';

import { useQuery } from 'react-query';
import { cn } from '@/lib/utils';
import { Categories } from '@/app/lib/types';

const FilterBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // active category styling
  const [open, setOpen] = useState(false); // for categories dropdown

  // for pagination
  const [limit] = useState(9);
  const [offset, setOffset] = useState(0);
  const nextPage = () => setOffset(offset + 9);
  const previousPage = () => setOffset(offset >= 9 ? offset - 9 : 0);

  const router = useRouter();
  useEffect(() => {
    const baseUrl = '/';
    router.push(`${baseUrl}?limit=${limit}&offset=${offset}`);
  }, [limit, offset]);

  // fetching all posts
  const { allPosts: blogPosts, isLoading } = useAllPosts(
    limit,
    offset,
    selectedCategory as string
  );

  // fetching all categories
  const { data: categoryNamesData } = useQuery<Categories>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  if (isLoading) return <Loader />;

  if (!isLoading && _.isEmpty(blogPosts)) return <Loader />;

  return (
    <section className='px-4 min-h-screen'>
      <div className='border-b-2 border-t-2 my-12 py-6 sticky top-0 bg-gray-50'>
        <div className='md:max-w-6xl mx-auto'>
          <ul className='flex flex-wrap gap-3 justify-start md:justify-center items-center md:gap-8'>
            {categoryNamesData?.categories?.slice(0, 5).map((category) => (
              <li key={category?.id} className='hover:cursor-pointer'>
                <span
                  className={`text-xs rounded-full py-2 px-3 ${
                    selectedCategory === category.name
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    // mutate(category.name);
                  }}
                >
                  {category?.name}
                </span>
              </li>
            ))}

            <Popover open={open as any} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <span className='text-xs text-primary cursor-pointer'>
                  More Categories
                </span>
              </PopoverTrigger>
              <PopoverContent className='w-[250px] p-0'>
                <Command>
                  <CommandInput placeholder='Search category...' />
                  <CommandEmpty>No categories found.</CommandEmpty>
                  <CommandGroup>
                    {categoryNamesData?.categories?.slice(4).map((category) => (
                      <CommandItem
                        key={category?.id}
                        value={category?.id}
                        onSelect={() => {
                          setSelectedCategory(category?.name);
                          // mutate(category?.name);
                          setOpen(false);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            'mr-2 h-4 w-4',
                            selectedCategory === category?.name
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                        {category?.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </ul>
        </div>
      </div>
      <div className='max-w-6xl mx-auto '>
        <div className='grid md:grid-cols-3 gap-6' id='scroll-position'>
          {blogPosts?.results?.map((post, i) => (
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
                  {post?.categories.slice(0, 2).map((tag, i) => (
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
            totalPosts={Number(blogPosts?.results?.length)}
            nextPage={nextPage}
            previousPage={previousPage}
            limit={limit}
            offset={offset}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterBlog;
