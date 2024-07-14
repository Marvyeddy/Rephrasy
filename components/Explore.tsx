import Image from 'next/image';
import React from 'react';

const Explore = () => {
  return (
    <section className='relative'>
      <div className='w-[98.66%] md:mt-[11px] mt-10 bg-black mx-auto rounded-[20px] py-[71px]'>
        <div className='w-max mx-auto flex flex-col gap-3 items-center'>
          <div className='flex items-center gap-3 bg-[#FBF6F0] w-[116px] h-5 justify-center rounded-full'>
            <Image
              src={'/ph_sparkleb.svg'}
              alt=''
              width={10.88}
              height={10.88}
            />
            <h2 className='font-medium text-xs'>Use cases</h2>
          </div>

          <h2 className='md:w-[537px] w-[330px]  h-12 text-white md:text-5xl text-4xl text-center'>
            Explore the use cases
          </h2>

          <p className='opacity-90 text-white md:w-[415px] w-[330px] text-center mt-8 leading-6'>
            Rephrasy can be used for a lot of scenarios from academic writing to
            content creation and e-commerce.
          </p>
        </div>

        <div className='w-[80%] flex flex-col lg:flex-row text-center gap-6 mx-auto mt-[72px]'>
          <div className='lg:w-[368px] flex flex-col gap-6 items-center'>
            <Image src={'/image1.svg'} alt='' width={368} height={125} />
            <h2 className='text-white text-xl font-extrabold'>
              Academic Writing
            </h2>
            <p className='text-white opacity-80'>
              Transform your essays, research papers, and dissertations into
              polished, human-like writing that bypasses plagiarism checkers and
              maintains academic integrity.
            </p>
          </div>
          <div className='lg:w-[368px] flex flex-col gap-6 items-center'>
            <Image src={'/image2.svg'} alt='' width={368} height={125} />
            <h2 className='text-white text-xl font-extrabold'>
              SEO Optimization
            </h2>
            <p className='text-white opacity-80'>
              Boost Your Search Engine Rankings. SEO specialists can use
              Rephrasy to create keyword-optimized content that reads naturally.
              Improve your search engine rankings with human-like, engaging
              content
            </p>
          </div>
          <div className='lg:w-[368px] flex flex-col gap-6 items-center'>
            <Image src={'/image3.svg'} alt='' width={368} height={125} />
            <h2 className='text-white text-xl font-extrabold'>
              Social Media Management
            </h2>
            <p className='text-white opacity-80'>
              Social media managers can generate posts that resonate with
              followers using Rephrasy. Humanize your AI-generated content to
              create social media posts that connect personally with your
              audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
