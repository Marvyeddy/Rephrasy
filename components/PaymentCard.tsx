import Image from 'next/image';
import React from 'react';

const PaymentCard = ({
  text,
  price,
  button,
  month,
  x,
  y,
  z,
  className,
}: {
  text: string;
  price: string;
  button: string;
  x: string;
  y: string;
  z: string;
  month: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col w-[336.7px] items-start ${className} px-6 py-6`}
    >
      <div className='w-[121.34px] font-medium rounded-full border border-black text-center text-[19.73px]'>
        {text}
      </div>
      <h2 className='text-[35.85px] mt-[26.3px]'>
        {price} <span className='text-[19.73px]'>{month ? '/month' : ''}</span>
      </h2>
      <button className='w-[273.57px] h-[47.35px] rounded-full bg-black/10 text-[17.1px] mt-[32.22px]'>
        {button}
      </button>
      <span className='w-[270.57px]  border text-black/15 block mt-[34.2px]'></span>
      <div className='mt-[30.9px] flex flex-col gap-[15px] items-start'>
        <div className='flex gap-2'>
          <Image src={'/check.svg'} alt='' width={21} height={21} />
          <h2 className='text-[19px]'>Up to {x} members</h2>
        </div>
        <div className='flex gap-2'>
          <Image src={'/check.svg'} alt='' width={21} height={21} />
          <h2 className='text-[19px]'>Up to {y} websites</h2>
        </div>
        <div className='flex gap-2'>
          <Image src={'/check.svg'} alt='' width={21} height={21} />
          <h2 className='text-[19px]'>{z} years of data retention</h2>
        </div>
        <div className='flex gap-2'>
          <Image src={'/check.svg'} alt='' width={21} height={21} />
          <h2 className='text-[19px]'>Email & Slack reports</h2>
        </div>
        <div className='flex gap-2'>
          <Image src={'/check.svg'} alt='' width={21} height={21} />
          <h2 className='text-[19px]'>GA4 imports</h2>
        </div>
        <div className='flex gap-2'>
          <Image src={'/check.svg'} alt='' width={21} height={21} />
          <h2 className='text-[19px]'>Goals and custom events</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
