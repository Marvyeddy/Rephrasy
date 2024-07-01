import Image from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => {
  return (
    <div className='bg-gradient-to-b from-[#b83e3e07] to-[#FFFFFF] min-h-screen pt-[159px]'>
      <div className='flex items-center gap-3 bg-[#FBF6F0] w-[50px] h-5 justify-center rounded-full mx-auto mt-9'>
        <Image src={'/faq.svg'} alt='' width={10.88} height={10.88} />
        <h2 className='font-medium text-xs'>FAQ</h2>
      </div>

      <h2 className='md:text-5xl text-3xl w-max mx-auto mt-3 mb-[42px]'>
        Frequently Asked...
      </h2>

      <div className='md:w-[552px] w-[330px] mx-auto'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              How does Rephrasy work?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              Will my AI writing lose its original meaning?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              How does Rephrasy differentiate from other tools?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              What if my content exceeds this limit ?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              Can I use Rephrasy for non AI writing?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              What platforms are compatible with Rephrasy?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-7' className='mt-[12px] rounded-[22px]'>
            <AccordionTrigger className=' font-bold px-3 '>
              Is my data safe?
            </AccordionTrigger>
            <AccordionContent className='px-3 w-[516px] pb-[48.5px]'>
              Rephrasy works with text from ChatGPT, Claude, or any other AI
              content generator.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
