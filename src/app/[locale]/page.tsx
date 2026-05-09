import Hero from '../../components/sections/Hero';
import HowItWorks from '../../components/sections/HowItWorks';
import Features from '../../components/sections/Features';
import Morocco from '../../components/sections/Morocco';
import Trust from '../../components/sections/Trust';
import Business from '../../components/sections/Business';
import Testimonials from '../../components/sections/Testimonials';
import CTA from '../../components/sections/CTA';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import LiveActivity from '../../components/sections/LiveActivity';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  await params; // Await params as required by Next.js 16
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LiveActivity />
        <HowItWorks />
        <Features />
        <Morocco />
        <Trust />
        <Business />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
