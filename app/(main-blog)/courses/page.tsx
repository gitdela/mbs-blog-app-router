// 'use client';

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import _ from 'lodash';
// import { useRouter } from 'next/navigation';
// import { useCourses } from '../../lib/posts';
// import Loader from '../(home)/loader';
// // import { useDebounce } from '@/utils';
// // import EmptyData from '../EmptyData';
// import Pagination from '../components/pagination';
// // import { useDebounce } from '@/app/lib/utils';
// import EmptyData from './emptydata';

// export const Courses = () => {
//   const [limit] = useState(5);
//   const [offset, setOffset] = useState(0);

//   const [searchCourse, setSearchCourse] = useState('');
//   // const debSearch = useDebounce(searchCourse, 1500);

//   const router = useRouter();

//   const nextPage = () => setOffset(offset + 5);
//   const previousPage = () => setOffset(offset >= 5 ? offset - 5 : 0);

//   // const { courses, isLoading, isFetching } = useCourses(
//   //   limit,
//   //   offset,
//   //   debSearch
//   // );

//   // console.log(courses);

//   useEffect(() => {
//     router.push(`/courses?limit=${limit}?offset=${offset}`);
//   }, [limit, offset]);

//   // if (isLoading || isFetching) return <Loader />;

//   // if (!isLoading && !_.isEmpty(courses)) return <Loader />;

//   // if (!isLoading && !_.isEmpty(courses))
//   //   return (
//   //     <div className='h-screen flex justify-center'>
//   //       {' '}
//   //       <EmptyData description='Sorry, There are no courses available' />{' '}
//   //     </div>
//   //   );

//   return (
//     <main>
//       <div className='w-full bg-[#2349c2]'>
//         <div className='relative max-w-6xl mx-auto px-4 md:flex md:justify-center md:items-center md:gap-24 '>
//           <div className='text-white tracking-wide flex flex-col justify-around gap-2 pt-8 md:pt-0 md:w-2/5'>
//             <h1 className='text-2xl font-semibold md:text-4xl'>
//               Start Learning cryptos on Mybitstore
//             </h1>
//             <div className='text-md md:text-xl'>
//               <p>
//                 Increase your knowledge in cryptos and reward yourself with
//                 financial freedom
//               </p>
//             </div>
//           </div>
//           <div className='flex justify-center items-center py-6 sm:hidden'>
//             <Image
//               src='/assets/watering_flowers.png'
//               priority
//               width={200}
//               height={200}
//               alt=''
//             ></Image>
//           </div>
//           <div className='hidden sm:flex justify-center items-center'>
//             <Image
//               src='/assets/watering_flowers.png'
//               priority
//               width={350}
//               height={350}
//               alt=''
//             ></Image>
//           </div>
//           <div className='bg-white absolute w-[90%] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center gap-3  text-sm rounded-lg py-4 px-6 sm:w-3/5 md:w-4/5'>
//             <input
//               value={searchCourse}
//               onChange={(e) => setSearchCourse(e.target.value)}
//               type='text'
//               placeholder='Search for courses...'
//               className='w-full border border-gray-200 rounded-md p-2'
//             />
//           </div>
//         </div>
//       </div>
//       <div className='max-w-6xl mx-auto flex flex-col gap-16 justify-between mt-14 mb-10 px-4'>
//         {!_.isEmpty(courses) ? (
//           courses?.results?.map((course: any, key: number) => (
//             <div key={key} className='md:w-full md:grid md:grid-cols-2 gap-6'>
//               <Link
//                 href={{
//                   pathname: `/courses/${course.id}`,
//                   query: { course_id: course.id },
//                 }}
//                 className='w-3/4 ms-auto cursor-pointer'
//               >
//                 <iframe
//                   className='rounded-lg flex w-full justify-end cursor-pointer'
//                   width='100%'
//                   height='250px'
//                   src={
//                     course?.video_url.includes('embed')
//                       ? course?.video_url
//                       : course?.video_url.replace('watch?v=', 'embed/')
//                   }
//                   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//                 ></iframe>
//               </Link>
//               <div className='mt-4 space-y-3 md:mt-0 md:space-y-3'>
//                 <Link
//                   href={{
//                     pathname: `/courses/${course.id}`,
//                     query: { course_id: course.id },
//                   }}
//                   className='text-xl md:text-2xl'
//                 >
//                   {course.title}
//                 </Link>
//                 <p className='text-sm my-3 md:text-base'>
//                   {_.truncate(course.description, {
//                     length: 250,
//                   })}
//                 </p>
//                 <Link
//                   href={{
//                     pathname: `/courses/${course.id}`,
//                     query: { course_id: course.id },
//                   }}
//                   className='bg-[#2349A9] inline-block rounded-md text-white text-xs my-4 py-2 px-3 cursor-pointer md:text-sm'
//                 >
//                   Start Learning
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className='py-20 flex justify-center'>
//             <Loader />
//           </div>
//         )}
//         <Pagination
//           limit={limit}
//           offset={offset}
//           nextPage={nextPage}
//           previousPage={previousPage}
//           totalPosts={Number(courses?.results?.length)}
//         />
//       </div>
//     </main>
//   );
// };

// export default Courses;
