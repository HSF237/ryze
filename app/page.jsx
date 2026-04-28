import Hero from '@/components/Hero';
import PressMarquee from '@/components/PressMarquee';
import ValueProps from '@/components/ValueProps';
import ProductShowcase from '@/components/ProductShowcase';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import Reviews from '@/components/Reviews';
import Comparison from '@/components/Comparison';
import GuaranteeCTA from '@/components/GuaranteeCTA';
import FAQList from '@/components/FAQList';

export default function Home() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <ValueProps />
      <ProductShowcase />
      <HowItWorksSteps />
      <Reviews />
      <Comparison />
      <GuaranteeCTA />
      <FAQList />
    </>
  );
}
