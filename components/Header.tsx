import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='h-[101px] py-[27px] md:px-[120px] px-[20px] mt-[1px] flex justify-between items-center absolute w-full z-10'>
      <div className='w-[165.74px] h-[47px] flex'>
        <Image src={'/logo.svg'} alt='logo' width={27.71} height={30.79} />
        <h2 className='font-sans font-bold md:text-[34.94px] text-[30px] leading-[47.17px] -tracking-[0.06em]'>
          rephrasy
        </h2>
      </div>

      <div className='lg:flex gap-14 hidden'>
        <Link
          href='#section1'
          className='text-base tracking-[0.06em] leading-[26px] font-medium'
        >
          Features
        </Link>
        <Link
          href={'#section2'}
          className='text-base tracking-[0.06em] leading-[26px] font-medium'
        >
          Pricing
        </Link>
        <Link
          href={'#section3'}
          className='text-base tracking-[0.06em] leading-[26px] font-medium'
        >
          FAQs
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <div className='md:flex items-center gap-[29px] hidden'>
          <Link href={'/'} className='text-base font-bold leading-[26px]'>
            Login
          </Link>
          <Link
            href={'/'}
            className='bg-black rounded-[100px] shadow-sm shadow-[#00000014]'
          >
            <h2 className='px-[22px] py-[8px] text-white rounded-lg text-base font-bold'>
              Get started
            </h2>
          </Link>
        </div>

        <button className='lg:hidden'>
          <MenuIcon size={27} />
        </button>
      </div>
    </div>
  );
};

export default Header;
