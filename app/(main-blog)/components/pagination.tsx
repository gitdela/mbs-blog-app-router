import clsx from 'clsx';

interface PaginationProps {
  totalPosts: number | undefined;
  nextPage: () => void;
  previousPage: () => void;
  limit: number;
  offset: number;
}
const Pagination: React.FC<PaginationProps> = ({
  nextPage,
  previousPage,
  offset,
  totalPosts,
  limit,
}) => {
  const scrollToTop = () => {
    const element = document.querySelector('body');

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='flex justify-center gap-1 text-sm md:justify-end'>
      <button
        disabled={offset === 0}
        className={clsx(
          offset === 0 ? 'text-gray-400' : 'text-black',
          'flex flex-col justify-center px-4 py-2 rounded-md hover:cursor-pointer bg-slate-100 hover:bg-slate-200'
        )}
        onClick={() => {
          previousPage();
          scrollToTop();
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
          nextPage();
          scrollToTop();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
