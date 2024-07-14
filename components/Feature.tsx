/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Card from './Card';

const Feature = () => {
  return (
    <div className='relative min-h-screen'>
      <div className='w-max mt-[155px] mx-auto flex flex-col items-center '>
        <div className='w-[116.98px] rounded-full bg-[#FBF6F0] flex items-center gap-3 justify-center'>
          <Image src={'/ph_sparkleb.svg'} alt='' width={12} height={12} />
          <h2 className='font-medium text-xs '>Features</h2>
        </div>
        <h2 className='h-[96px] md:w-[419px] w-[330px] md:text-5xl text-4xl text-center md:leading-[48px] font-medium mt-3'>
          Revolutionizing AI <span className='opacity-50'>Paraphrasing</span>
        </h2>
      </div>

      <ul className='mt-[60px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-max mx-auto'>
        <Card img={'/Frame 1.svg'}>
          <h2 className='text-xl leading-5 text-center font-bold'>
            Humanize AI Text
          </h2>
          <p className='md:w-[338px] w-[300px]  opacity-50'>
            Elevate your AI writing with Rephrasy's industry-leading human
            writer. Paste your AI content and we'll do the rest..
          </p>
        </Card>
        <Card img={'/Frame 2.svg'}>
          <h2 className='text-xl leading-5 text-center font-bold'>
            Built in Free AI detector
          </h2>
          <p className='md:w-[338px] w-[300px] opacity-50'>
            Ensure your content is not flagged as AI. Retry for free if
            necessary..
          </p>
        </Card>
        <Card img={'/Frame 3.svg'}>
          <h2 className='text-xl leading-5 text-center font-bold'>
            Leading Anti-AI Detector.
          </h2>
          <p className='md:w-[338px] w-[300px] opacity-50'>
            Bypass AI detection with the world's most powerful AI undetectable
            tool.
          </p>
        </Card>
        <Card img={'/Frame 4.svg'}>
          <h2 className='text-xl leading-5 text-center font-bold'>
            AI to Human Text.
          </h2>
          <p className='md:w-[338px] w-[300px] opacity-50'>
            Keep your AI writing undetectable with the world's best AI detection
            remover.
          </p>
        </Card>
        <Card img={'/Frame 5.svg'}>
          <h2 className='text-xl leading-5 text-center font-bold'>
            Quality Humanizer Output
          </h2>
          <p className='md:w-[338px] w-[300px] opacity-50'>
            No grammatical errors or low-quality output. Rephrasy offers the
            highest quality outputs in the industry..
          </p>
        </Card>
        <Card img={'/Frame 6.svg'}>
          <h2 className='text-xl leading-5 text-center font-bold'>
            Create Undetectable AI
          </h2>
          <p className='md:w-[338px] w-[300px] opacity-50'>
            Maintain your privacy and ensure your content resonates with readers
            using.
          </p>
        </Card>
      </ul>
    </div>
  );
};

export default Feature;
