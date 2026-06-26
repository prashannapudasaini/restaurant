import Header from '../components/Header';
import Hero from '../sections/Hero';
import SignatureDishes from '../sections/SignatureDishes';
import Testimonials from '../sections/Testimonials';
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
        <SignatureDishes />
        <Testimonials />
        <Stats />
        <InstagramFeed />
        <PremiumCTA />
      </main>

      <Footer />
    </div>
  );
}
