/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='relative'>
      <div className='bg_gradient_footer  absolute w-[98.33%]  bottom-3 left-3 rounded-3xl h-full -z-50'></div>
      <div className='w-max mx-auto flex flex-col gap-3 items-center mt-[62px]'>
        <div className='flex items-center gap-3 bg-[#FBF6F0] w-[121px] h-5 justify-center rounded-full mx-auto mt-9'>
          <Image src={'/footer.svg'} alt='' width={10.88} height={10.88} />
          <h2 className='font-medium text-xs'>Get Started Now</h2>
        </div>
        <h2 className='md:w-[396px] w-[330px] h-[80px] md:text-[34.45px] text-3xl leading-[40px] text-center font-bold -tracking-[0.04em]'>
          Humanize AI Text to Craft Content at Scale
        </h2>
        <p className='w-[299.91px] h-[24px] text-[15px] -tracking-wide text-center'>
          Revolutionizing AI Paraphrasing
        </p>
        <button className='border hover:opacity-50 border-black rounded-[100px]  bg-black text-white font-bold w-[170px] h-[36px] text-[13px] mt-8 py-2'>
          Get Started ― for free
        </button>
      </div>

      <div className='lg:w-[900px] md:w-[700px] flex md:flex-row flex-col items-center justify-between mx-auto mt-[76px] pb-[83px] gap-7'>
        <div className='w-max flex flex-col gap-[15px] items-center md:items-start'>
          <div className='flex items-center'>
            <Image src={'/logo.svg'} alt='' width={17} height={19} />
            <h2 className='text-[21px] leading-[29.31px] -tracking-[0.06em] font-bold font-sans'>
              rephrasy
            </h2>
          </div>
          <p className='w-[276.22px] h-[40px] text-[13px] leading-5 text-center md:text-start'>
            the world's most powerful AI Humanizer and AI-generated content
            detector.
          </p>
          <button className='border border-white flex items-center gap-[10px] bg-gray-200 py-2 px-3 rounded-[20px] w-max'>
            <Image src={'/US Flag.svg'} alt='' width={16} height={16} />
            <h2 className='text-[14px] text-stone-400'>ENG</h2>
            <Image src={'/icondrop.svg'} alt='' width={11} height={6} />
          </button>
        </div>

        <div className='w-max flex gap-[91px] items-center'>
          <div className='flex flex-col gap-[14px] items-start'>
            <h2 className='text-[13px] text-[#808080]'>Features</h2>
            <ul className='flex flex-col gap-3 text-[13px]'>
              <li>Humanizer</li>
              <li>AI Detector</li>
              <li>API Solution</li>
            </ul>
          </div>
          <div>
            <div className='flex flex-col gap-[14px] items-start'>
              <h2 className='text-[13px] text-[#808080]'>Company</h2>
              <ul className='flex flex-col gap-3 text-[13px]'>
                <li>Pricing</li>
                <li>Imprint</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
