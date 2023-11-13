"use client"

import clsx from 'clsx';
import _ from 'lodash';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPosts: number | undefined;
  limit: number
}
const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  limit: mainLimit
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace, push } = useRouter();
  const pathname = usePathname();

  const offset = Number(searchParams.get('offset')) ?? 0;
  const limit = Number(searchParams.get('limit')) ?? mainLimit;

  const scrollToTop = () => {
    const element = document.querySelector('body');

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const next = () => {
    if (offset < 1) {
      console.log(offset)
      params.set('offset', Number(mainLimit).toString());
      params.set('limit', Number(mainLimit).toString());
    } else {
      params.set('offset', Number(offset + limit).toString());
    }
    push(`${pathname}?${params.toString()}`)
    scrollToTop();
  }
  const previous = () => {
    if (offset > 0) {
      params.set('offset', Number(offset - limit).toString());
      push(`${pathname}?${params.toString()}`)
      scrollToTop();
    }
  }

  const uniqueParams = _.uniqBy(params.entries() as any, function (e) {
    return e;
  })


  return (
    <div className='flex justify-center gap-1 text-sm md:justify-end'>
      <button
        disabled={offset === 0}
        className={clsx(
          offset === 0 ? 'text-gray-400' : 'text-black',
          'flex flex-col justify-center px-4 py-2 rounded-md hover:cursor-pointer bg-slate-100 hover:bg-slate-200'
        )}
        onClick={() => {
          previous()
        }}
      >
        Prev
      </button>
      <button
        disabled={Number(totalPosts) < Number(limit)}
        className={clsx(
          Number(totalPosts) < Number(limit) ? 'text-gray-400' : 'text-black',
          'flex flex-col justify-center px-4 py-2 rounded-md hover:cursor-pointer bg-slate-100 hover:bg-slate-200'
        )}
        onClick={() => {
          next()
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
