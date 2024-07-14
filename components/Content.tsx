import Image from 'next/image';
import React from 'react';

const Content = () => {
  return (
    <div className='relative min-h-screen'>
      <div className='relative lg:w-[1135px] md:w-[700px] lg:mt-[149px] hidden h-[353px] mx-auto md:block'>
        <Image src={'/context.svg'} alt='' fill />
      </div>

      <div className='w-max mt-[60px] flex lg:flex-row flex-col justify-between items-center mx-auto gap-12  pb-[84px]'>
        <div className='w-max flex flex-col gap-3 items-center md:items-start'>
          <div className='w-[116.98px] rounded-full bg-[#FBF6F0] flex items-center gap-3 justify-center'>
            <Image src={'/ph_sparkleb.svg'} alt='' width={12} height={12} />
            <h2 className='font-medium text-xs '>How to</h2>
          </div>

          <h2 className='md:w-[537px] w-[330px] pb-[17px] md:text-5xl text-4xl text-center md:text-start font-medium md:leading-[48px]'>
            Humanize AI content in{' '}
            <span className='opacity-50'>three easy steps!</span>
          </h2>

          <p className='md:w-[537px] w-[330px] text-base text-center md:text-start leading-6 opacity-50'>
            Protect your online privacy and maintain anonymity. Supercharge your
            text with Rephrasy to eliminate AI tracking and bypass AI detection.
            <br />
            <br />
            Rephrasy truly is the most powerful AI detection remover and AI
            humanizer tool that helps you make your text undetectable by AI
            content detectors.
          </p>

          <button className='w-max rounded-[100px] md:text-base text-sm leading-[26px] font-bold border md:px-[22px] py-2 px-3 border-[#FFFFFF29] bg-black flex items-center gap-2 hover:bg-black/75'>
            <h2 className='text-white'>Try for free</h2>
            <Image src={'/ph_sparkle.svg'} alt='' width={16} height={16} />
          </button>
        </div>

        <div className='md:w-[612px] w-[330px] md:p-6 rounded-[18px] flex flex-col gap-12 items-start '>
          <div className='flex gap-6'>
            <Image src={'/icon2.svg'} alt='' width={48} height={48} />
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg font-bold leading-5'>
                Copy AI generated text
              </h2>
              <p className='md:w-[492px] w-[270px] opacity-50 leading-6 text-base '>
                Rephrasy works with text from ChatGPT, Claude, or any other AI
                content generator.
              </p>
            </div>
          </div>
          <div className='flex gap-6'>
            <Image src={'/icon3.svg'} alt='' width={48} height={48} />
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg font-bold leading-5'>
                Paste into Rephrasy
              </h2>
              <p className='md:w-[492px] w-[270px] opacity-50 leading-6 text-base '>
                Paste your text to Humanize AI. Our tool refines and transforms
                your content to sound more human.
              </p>
            </div>
          </div>
          <div className='flex gap-6'>
            <Image src={'/icon4.svg'} alt='' width={48} height={48} />
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg font-bold  leading-5'>
                Click Rephrasy to humanize AI text
              </h2>
              <p className='md:w-[492px] w-[270px] opacity-50 leading-6 text-base '>
                Rephrasy is a powerful AI detection remover that works
                seamlessly with Turnitin, ZeroGPT, and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
