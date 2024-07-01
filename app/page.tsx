import Content from '@/components/Content';
import Explore from '@/components/Explore';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <Hero />
      <Content />
      <Explore />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
