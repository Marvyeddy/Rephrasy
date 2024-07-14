import Image from 'next/image';
import React from 'react';
import PaymentCard from './PaymentCard';

const Pricing = () => {
  return (
    <div className='relative bg-gradient-to-b from-[#b83e3e15] to-[#FFFFFF] min-h-screen pt-[204px]'>
      <div className='flex items-center gap-3 bg-[#FBF6F0] w-[116px] h-5 justify-center rounded-full mx-auto'>
        <Image src={'/ph_sparkleb.svg'} alt='' width={10.88} height={10.88} />
        <h2 className='font-medium text-xs'> Pricing</h2>
      </div>

      <div className='lg:w-[537px] w-[330px] h-24 mx-auto text-center mt-3'>
        <h2 className='lg:text-5xl text-3xl'>
          Choose the plan that’s right for you
        </h2>
      </div>

      <div className='lg:mt-[59px] lg:w-[1073px]  w-max mx-auto flex lg:flex-row flex-col gap-8 px-6'>
        <PaymentCard
          button='Get Started'
          month
          price='$29'
          text='Growth'
          x='3'
          y='10'
          z='3'
        />
        <PaymentCard
          button='Get Started'
          month
          price='$59'
          text='Business'
          x='10'
          y='20'
          z='5'
          className='bg-white rounded-[20px]'
        />
        <PaymentCard
          button='Contact Us'
          month={false}
          price='Custom'
          text='Enterprise'
          x='20'
          y='50'
          z='5+'
        />
      </div>

      <div className='w-[1036px] border border-black/10 mb-[22.5px] mt-[25px] mx-auto'></div>

      <div className='lg:w-[1073px] md:w-[730px] w-[330px] h-[217px] mt-[58px] mx-auto flex flex-col md:flex-row justify-between md:items-start items-center px-8'>
        <div className='w-max flex md:block flex-col items-center gap-9'>
          <h2 className='md:w-[331px] w-[260px] h-[80px] md:text-[34.45px] text-3xl text-center md:text-start font-bold leading-[40px] mt-[38px]'>
            Unlock more with only the{' '}
            <span className='opacity-50'>AI Detector</span>
          </h2>
          <button className='w-max rounded-[100px] md:text-base text-sm leading-[26px] font-bold border md:px-[22px] py-2 px-3 border-[#FFFFFF29] bg-black flex items-center gap-2 mt-[19px] hover:bg-black/75'>
            <h2 className='text-white'>Subscribe</h2>
            <Image src={'/ph_sparkle.svg'} alt='' width={16} height={16} />
          </button>
        </div>

        <div className='flex gap-2 mt-[47px] items-center'>
          <h2 className='text-[35.96px] font-normal'>$120</h2>
          <p className='mt-[11px] text-[19.73px]'>/year</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
