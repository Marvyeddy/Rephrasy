/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Feature from './Feature';

const Hero = () => {
  return (
    <div className='relative lg:pt-3 pt-1 min-h-screen'>
      <div className='absolute bg-gradient-to-b from-[#AF73D5f8] via-[#FE9286f8] to-[#FAF9F4f8] opacity-20 h-screen lg:w-[98%] w-full lg:left-3 lg:rounded-[20px] -z-50'></div>

      <div className='border-gradient w-max py-[2px] rounded-[100px] mx-auto mt-[154px]'>
        <button className='flex items-center gap-2 px-3 py-1 bg-white rounded-[100px]'>
          <Image src={'/icon1.svg'} alt='' width={24} height={24} />
          <h2 className='text-base leading-[24px] tracking-[0.18%] text-center'>
            Risk-Free Trial
          </h2>
        </button>
      </div>

      <div className='mt-4 flex md:gap-[31px] gap-6 flex-col w-max mx-auto items-center'>
        <h1 className='md:w-[625px] w-[310px] md:h-[128px] font-medium md:text-[64px] text-3xl md:leading-[64px] text-center '>
          Transform AI Content{' '}
          <span className='opacity-50'>to human perfection.</span>
        </h1>

        <p className='md:w-[566px] w-[350px] text-center md:text-lg text-base md:leading-[26px] tracking-[0.02em] font-normal opacity-80'>
          Bypass AI detection with the world's most powerful AI Humanizer and
          AI-generated content detector
        </p>
      </div>

      <div className='lg:w-[739px] md:w-[640px] w-[90%] h-[289px] md:mt-[60px] mt-7 rounded-[20px] border-[10px] mx-auto p-6 flex flex-col gap-[10px] shadow-md shadow-[#899BAC12] border-[#FFFFFF1F] bg-white'>
        <textarea
          placeholder='Paste your AI-generated content here...'
          cols={30}
          rows={10}
          className='text-base placeholder:opacity-80 placeholder:text-black placeholder:font-normal outline-none'
        />
        <div className='flex items-center justify-between md:flex-row flex-col gap-4'>
          <button className='py-[2px] px-2 rounded-[100px] bg-[#F5F5F5] text-xs leading-5 tracing-[0.04em] text-[#312F2F96]'>
            239/300 words
          </button>
          <div className='flex md:gap-5 gap-4'>
            <button className='rounded-[100px] md:text-base text-sm leading-[26px] font-bold border md:px-[22px] px-[3px] py-2 border-black '>
              Check AI Score
            </button>
            <button className='rounded-[100px] md:text-base text-sm leading-[26px] font-bold border md:px-[22px] py-2 px-[3px] border-[#FFFFFF29] bg-black flex items-center gap-2'>
              <h2 className='text-white'>Humanize</h2>
              <Image src={'/ph_sparkle.svg'} alt='' width={16} height={16} />
            </button>
          </div>
        </div>
      </div>

      <Feature />
    </div>
  );
};

export default Hero;
