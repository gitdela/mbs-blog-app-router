
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { SubcribeButton } from './subscribe-button';
import submitSubscribe from '../actions/submitSubscribe';
import { useFormState } from 'react-dom';

const initialState = {
  message: null,
  info: null
}

const Subscribe = () => {

  const [state, formAction] = useFormState(submitSubscribe, initialState)

  useEffect(() => {
    if (state?.info) {

      toast.success('You have successfully subscribed to our newsletter');
    }
  }, [state])

  return (
    <div className='w-full py-10 px-4  bg-gray-50'>
      <div className='max-w-6xl mx-auto flex md:flex-row flex-col items-center'>
        <div>
          <Image
            src='/assets/subscribe.svg'
            width={400}
            height={400}
            alt='subscribe'
          />
        </div>
        <div>
          <div className='grid gap-5'>
            <h2 className='font-semibold text-4xl'>
              Stay crypto smart without the chaos!{' '}
            </h2>
            <p className='text-gray-600'>
              Our weekly email brings you all the latest crypto happenings,
              minus the noise
            </p>
          </div>
          <div className='mt-5'>
            <form action={formAction} className='grid gap-5'>
              <div className='flex items-center gap-2'>
                <input
                  name='email'
                  className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200'
                  type='text'
                  placeholder='Your email address'
                  required
                />
                <SubcribeButton />
              </div>
              {state?.message && (
                <div className='text-red-500 text-xs'>
                  *{state?.message}
                </div>
              )}

              <p className='text-gray-600'>
                By clicking the button you agree to our{' '}
                <Link
                  target='_blank'
                  className='text-blue-500 hover:underline'
                  href='https://mybitstore.com/terms'
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  className='text-blue-500 hover:underline'
                  href='https://mybitstore.com/privacy'
                  target='_blank'
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
