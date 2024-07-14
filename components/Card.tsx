import Image from 'next/image';
import React from 'react';

const Card = ({
  img,
  children,
}: {
  children: React.ReactNode;
  img: string;
}) => {
  return (
    <li className='w-[378px] flex flex-col items-center text-center rounded-[18px] p-5 gap-6'>
      <Image src={img} alt='' width={48} height={48} />
      {children}
    </li>
  );
};

export default Card;
