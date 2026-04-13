import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyDubaiMall from '@/components/WhyDubaiMall';
import Retail from '@/components/Retail';
import Luxury from '@/components/Luxury';
import Dining from '@/components/Dining';
import Attractions from '@/components/Attractions';
import Events from '@/components/Events';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyDubaiMall />
      <Retail />
      <Luxury />
      <Dining />
      <Attractions />
      <Events />
      <ContactCTA />
    </main>
  );
}
