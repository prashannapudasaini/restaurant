import Header from '../components/Header';
import Hero from '../sections/Hero';
import SignatureDishes from '../sections/SignatureDishes';
import OurHeritage from '../sections/OurHeritage';
import Testimonials from '../sections/Testimonials';
import PrivateEvents from '../sections/PrivateEvents';
import Stats from '../sections/Stats';
import InstagramFeed from '../sections/InstagramFeed';
import PremiumCTA from '../sections/PremiumCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-charcoal min-h-screen text-warmIvory">
      <Header />
      
      <main>
        <Hero />
        <OurHeritage />
        <SignatureDishes />
        <Testimonials />
        <PrivateEvents />
        <Stats />
        <InstagramFeed />
        <PremiumCTA />
      </main>

      <Footer />
    </div>
  );
}
