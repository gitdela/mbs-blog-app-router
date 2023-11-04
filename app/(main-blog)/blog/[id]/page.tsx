import { Post } from '@/app/lib/types';
import Image from 'next/image';
import moment from 'moment';
import apiRoutes from '@/app/lib/apiRoutes';
import { readingTime } from '@/app/lib/utils';
import author from '@/public/assets/Unknown_person.jpg';

const getAllPosts = async () => {
  const res = await fetch(apiRoutes.allPosts);
  return res.json();
};

// generateStaticParams will fetch all the posts and get extract their ids on the server
export async function generateStaticParams() {
  const posts = await getAllPosts();

  console.log('get all posts', posts);
  return posts.results.map((post: Post) => ({
    id: post.id,
  }));
}

// this will be called by generateStaticParams with each of the ids on the server
// to extract all the individual posts at build time
const blogPost = async (id: string) => {
  const res = await fetch(`${apiRoutes.singleBlog}${id}/`);
  return res.json();
};

// whatever post a user clicks on will have its id in the params object
// extract it and use it to render that post statically
const Page = async ({ params }: any) => {
  const { id } = params;
  const post = await blogPost(id);

  const readTime = readingTime(post?.body as string);

  return (
    <div className=' grid grid-cols-1 items-start gap-4'>
      <main className='md:max-w-3xl mx-auto min-h-[90vh] px-4 pt-8 pb-6 col-span-2'>
        <div className='flex flex-col w-full gap-4 pb-6 border-b-2 border-gray-200'>
          <div className='flex flex-col gap-4 md:gap-6'>
            <div className='h-full flex flex-col gap-4 mt-6 justify-center md:mt-0'>
              <ul className='text-primary-500 text-xs flex gap-2'>
                {post.categories.slice(0, 2).map((tag: any, i: any) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
              <h2 className='text-primary-500 capitalize text-xl tracking-wider font-medium md:text-3xl'>
                {post?.title}
              </h2>
              <div className='grid'>
                <div className='flex gap-3'>
                  <Image
                    src={post?.author?.profile_image ?? author}
                    width={40}
                    height={30}
                    alt=''
                    className='rounded-full h-12 w-12 object-cover'
                  />
                  <div className='grid'>
                    <span>{post?.author?.name}</span>
                    {readTime >= 1 && (
                      <span className='text-gray-500 text-sm'>
                        {readTime} min read
                      </span>
                    )}
                  </div>
                </div>
                <p className='text-gray-500 text-xs pt-2'>
                  {moment(post?.created_at).format('LL')}
                </p>
              </div>
            </div>
            <div className='w-full'>
              <Image
                src={post?.image_url ?? ''}
                width={600}
                height={100}
                alt=''
                className='w-full h-62 object-cover rounded-lg'
              />
            </div>
          </div>
          <div className='flex flex-col gap-3 py-6'>
            {/* <p>{post?.body}</p> */}
            <div
              dangerouslySetInnerHTML={{ __html: post?.body }}
              // className='text-base font-normal'
            />
          </div>
          {/* <div className=''>
            <SocialLinks post={post} />
          </div> */}
        </div>
      </main>
      {/* <aside className='hidden sticky top-0 lg:flex justify-center pt-8'>
      </aside> */}
      {/* <RelatedArticles /> */}
    </div>
  );
  //   return <BlogView post={data} />;
};

export default Page;

// import Image from 'next/image';
// import moment from 'moment';
// import author from '@/public/assets/Unknown_person.jpg';
// import { Post } from '@/app/lib/types';
// ---------------------
// import SocialLinks from './components/SocialLinks';
// import { readingTime } from '@/utils';
// import RelatedArticles from './components/RelatedArticles';

// interface Props {
//   post: Post | undefined;
// }

// const BlogView = ({ post }: Props) => {
//   const readTime = readingTime(post?.body as string);

//   if (!post) return null;
// };

// export default BlogView;
