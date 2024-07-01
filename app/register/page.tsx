/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';

const Register = () => {
  return (
    <div className='min-h-screen flex lg:flex-row flex-col   lg:gap-[162px] gap-[20px]'>
      <div className='lg:w-[515px] w-auto bg_gradient mt-3 lg:ml-3 ml-2 lg:mr-0 mr-2 rounded-[24px] hidden md:block'>
        <div className='flex items-center mt-[24px] ml-[24px]'>
          <Image src={'/logo.svg'} alt='' width={27.71} height={30.79} />
          <h2 className='text-[34.94px] font-bold leading-[47.17px] -tracking-[0.06em]'>
            rephrasy
          </h2>
        </div>
        <div className='w-[459px]'>
          <div className='w-max ml-[52px] mt-[511px] mb-[52px]'>
            <h2 className='w-[408px] h-[144px] text-[48px] leading-[48px]'>
              The world's most powerful{' '}
              <span className='opacity-50'>AI Humanizer</span>
            </h2>
            <p className='w-[408px] text-lg leading-[26px] mt-5 opacity-80 font-normal'>
              Bypass AI detection with the world's most powerful AI Humanizer
              and AI-generated content detector
            </p>
          </div>
        </div>
      </div>

      <div className='w-max mx-auto h-fit mt-[59px]'>
        <div>
          <h2 className='md:text-[28px] text-3xl font-bold text-center'>
            Create Account
          </h2>
          <p className='text-lg leading-[26px] md:w-[577px] text-center'>
            Already have an account?. &nbsp;
            <Link
              href={'/'}
              className='underline text-blue-600 hover:text-purple-500'
            >
              Login
            </Link>
          </p>
        </div>

        <form className='p-6 md:w-[448px] shadow-md shadow-[#899BAC12] mx-auto bg-white rounded-[20px] flex flex-col gap-10 mt-[25px]'>
          <div className='md:w-[400px] w-[330px] flex flex-col gap-6'>
            <div>
              <h2>Fullname</h2>
              <Input placeholder='Enter fullname' type='text' />
            </div>
            <div>
              <h2>Email address</h2>
              <Input placeholder='name@email.com' type='email' />
            </div>
            <div>
              <h2>Password</h2>
              <div className='relative'>
                <Input type='password' />
                <EyeIcon
                  className='absolute top-3 right-3 text-gray-400 cursor-pointer'
                  width={20}
                  height={16}
                />
              </div>
            </div>
            <div>
              <h2>Confirm password</h2>
              <div className='relative'>
                <Input type='password' />
                <EyeIcon
                  className='absolute top-3 right-3 text-gray-400 cursor-pointer'
                  width={20}
                  height={16}
                />
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox />
              <h2 className='text-sm'>I agree to the terms and conditions</h2>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <Button className='w-full py-3 rounded-[20px] h-[66px] bg-black shadow-sm shadow-[#00000014]'>
              <span className='w-full flex py-2 px-[22px] items-center justify-center gap-2'>
                <Image src={'/star.svg'} alt='' width={16} height={16} />
                <h2 className='text-base leading-[26px]'>
                  Sign up to rephrasy
                </h2>
              </span>
            </Button>

            <Button className='w-full py-3 rounded-[20px] h-[66px] bg-white shadow-md shadow-[rgba(63,72,87,0.05)] hover:bg-gray-600'>
              <span className='w-full flex py-2 px-[22px] items-center justify-center gap-2'>
                <Image src={'/google.svg'} alt='' width={16} height={16} />
                <h2 className='text-base leading-[26px] text-black '>
                  Continue with Google
                </h2>
              </span>
            </Button>
          </div>
        </form>

        <button className='border border-white flex items-center mb-7 gap-[10px] bg-[#E4E7EC] py-2 px-3 rounded-[20px] w-[99px] h-[36px] mx-auto mt-[25px]'>
          <Image src={'/US Flag.svg'} alt='' width={16} height={16} />
          <h2 className='text-[14px] text-stone-400'>ENG</h2>
          <Image src={'/icondrop.svg'} alt='' width={11} height={6} />
        </button>
      </div>
    </div>
  );
};

export default Register;
