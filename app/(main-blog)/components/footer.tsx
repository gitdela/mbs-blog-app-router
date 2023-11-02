// import Link from 'next/link';
// import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

// const Footer = () => {
//   const thisYear = new Date().getFullYear();
//   return (
//     <footer className='bg-primary-500'>
//       <div className='flex flex-col gap-8 items-center text-white py-10 px-6 md:px-0 md:gap-4'>
//         <h4 className='text-xl md:text-2xl font-bold'>
//           Subscribe to our Newsletter
//         </h4>
//         <p className='text-md text-center font-semibold md:text-lg'>
//           For updates and exclusive offers, enter your e-mail below
//         </p>
//         <input
//           type='email'
//           className='rounded-full py-3 px-4 w-3/4 md:w-1/5 focus:outline-none text-black'
//           placeholder='Email'
//         />
//         <button
//           type='submit'
//           className='bg-indigo-500 rounded-full text-xl font-semibold w-3/4 md:w-1/5 py-3 px-4 hover:cursor-pointer'
//         >
//           Subscribe
//         </button>
//       </div>
//       <div className='max-w-6xl mx-auto py-5 flex flex-col-reverse items-center justify-between gap-5 md:flex-row'>
//         <p className='text-lg text-white'>
//           &copy; {thisYear} Mybitstore, Inc. All rights reserved.
//         </p>
//         <div className='flex text-white gap-6 hover:cursor-pointer'>
//           <Link target='_blank' href='https://facebook.com/mybitstore'>
//             <BsFacebook size={25} />
//           </Link>
//           <Link target='_blank' href='https://twitter.com/mybitstore'>
//             <BsTwitter size={25} />
//           </Link>
//           <Link target='_blank' href='https://instagram.com/mybitstore_app/'>
//             <BsInstagram size={25} />
//           </Link>
//           <a
//             target='_blank'
//             href='https://youtube.com/channel/UCF2J6gWekpTk4jh63RbPVlw'
//           >
//             <BsYoutube size={25} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import apiRoutes from '@/apiRoutes';
// import api from '@/utils';
// import { useMutation } from '@tanstack/react-query';
// import Link from 'next/link';
// import React from 'react';
// import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
// import { toast } from 'sonner';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import z from 'zod'

// const formState = z.object({
//   email: z.string().email({ message: 'Please enter a valid email' })
// })

// const Footer = () => {
//   type FormValues = z.infer<typeof formState>
//   const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
//     resolver: zodResolver(formState)
//   })
//   const thisYear = new Date().getFullYear();

//   const subscribeNewsletter = async (data: FormValues) => {

//     const res = await api.post(apiRoutes.subscribeNewsletter, {
//       ...data
//     })
//     return res.data
//   }

//   const { mutate, isLoading } = useMutation({
//     mutationKey: ['subscribeNewsletter'],
//     mutationFn: subscribeNewsletter,
//     onSuccess: () => {
//       toast.success('Subscribed to newsletter')
//     },
//     onError: () => {
//       toast.error('Error subscribing to newsletter')
//     }
//   })

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     mutate(data)
//   }

//   return (
//     <footer className='bg-primary-500'>
//       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 items-center text-white py-10 px-6 md:px-0 md:gap-4'>
//         <h4 className='text-xl md:text-2xl font-bold'>
//           Subscribe to our Newsletter
//         </h4>
//         <p className='text-md text-center font-semibold md:text-lg'>
//           For updates and exclusive offers, enter your e-mail below
//         </p>
//         <input
//           {...register('email', { required: true })}
//           type='email'
//           className='rounded-full py-3 px-4 w-3/4 md:w-1/5 focus:outline-none text-black'
//           placeholder='Email'
//         />
//         {errors?.email?.message && <div className='text-red-500 text-xs'>*{errors?.email?.message}</div>}
//         <button
//           type='submit'
//           className='bg-indigo-500 rounded-full text-xl font-semibold w-3/4 md:w-1/5 py-3 px-4 hover:cursor-pointer'
//         >
//           {isLoading ? "Subscribing..." : "Subscribe"}
//         </button>
//       </form>
//       <div className='max-w-6xl mx-auto py-5 flex flex-col-reverse items-center justify-between gap-5 md:flex-row'>
//         <p className='text-lg text-white'>
//           &copy; {thisYear} Mybitstore, Inc. All rights reserved.
//         </p>
//         <div className='flex text-white gap-6 hover:cursor-pointer'>
//           <Link target='_blank' href='https://facebook.com/mybitstore'>
//             <BsFacebook size={25} />
//           </Link>
//           <Link target='_blank' href='https://twitter.com/mybitstore'>
//             <BsTwitter size={25} />
//           </Link>
//           <Link target='_blank' href='https://instagram.com/mybitstore_app/'>
//             <BsInstagram size={25} />
//           </Link>
//           <a
//             target='_blank'
//             href='https://youtube.com/channel/UCF2J6gWekpTk4jh63RbPVlw'
//           >
//             <BsYoutube size={25} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <Fragment>
      <footer className='bg-white ' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className=' mx-auto pt-12 px-4 w-full xl:max-w-6xl sm:px-6 lg:pt-16 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1'>
              <Image
                className='-ml-2'
                priority
                src={'/assets/mybitstore-logo.svg'}
                alt='logo'
                height={40}
                width={170}
              />
              <div className='mx-auto my-3 flex space-x-3 justify-start max-w-7xl'>
                <Link
                  target='_blank'
                  rel='noreferrer'
                  passHref
                  href='https://play.google.com/store/apps/details?id=app.mybitstore.com'
                >
                  <Image
                    // width={144}
                    // height={56}
                    width={140}
                    height={40}
                    src={'/assets/google-play.png'}
                    alt='android'
                    priority
                  />
                </Link>
                <Link
                  target='_blank'
                  rel='noreferrer'
                  passHref
                  href='https://apps.apple.com/us/app/mybitstore-buy-sell-bitcoin/id1579519877'
                >
                  <Image
                    width={140}
                    height={40}
                    src={'/assets/app-store.png'}
                    alt='ios'
                    priority
                    // width={144}
                    // height={56}
                  />
                </Link>
              </div>
            </div>
            <div className='mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 xl:mt-0 xl:col-span-2'>
              {/* <div className="md:grid md:grid-cols-2 md:gap-8"></div> */}
              {/* <div className="md:grid md:grid-cols-2 md:gap-8"> */}
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold  text-gray-900 tracking-wider uppercase'>
                  Product
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-base font-light text-gray-500 hover:text-gray-900  '
                      href='https://app.mybitstore.com/auth'
                    >
                      Buy & Sell Bitcoin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900   '
                      href='https://app.mybitstore.com/auth'
                    >
                      Buy & Sell USDT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/bulktrade'
                    >
                      OTC Trade
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/affiliate'
                    >
                      Become an Affiliate
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold  text-gray-900 tracking-wider uppercase'>
                  Help
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/contact'
                    >
                      Support
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/faq'
                    >
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='https://blog.mybitstore.com'
                      target='_blank'
                      rel='noreferrer'
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/feesandrates'
                    >
                      Fees & Rates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold  text-gray-900 tracking-wider uppercase'>
                  Company
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/about'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/privacy'
                    >
                      Privacy
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/terms'
                    >
                      User Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/rewardterms'
                    >
                      Reward Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold  text-gray-900 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/risks'
                    >
                      Risk Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/aml'
                    >
                      KYC & AML Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-base text-gray-500 font-light hover:text-gray-900  '
                      href='https://mybitstore.com/refund'
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className='mt-12 border-t border-gray-200 py-8'>
            <p className='text-base text-gray-400 xl:text-center'>
              &copy; {new Date().getFullYear()} Mybitstore, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
