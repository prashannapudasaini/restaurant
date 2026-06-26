import Header from '../components/Header';
import Hero from '../sections/Hero';
import SignatureDishes from '../sections/SignatureDishes';
import ChefsSpecial from '../sections/ChefsSpecial';
import InteractiveMenu from '../sections/InteractiveMenu';
import DiningExperience from '../sections/DiningExperience';
import Gallery from '../sections/Gallery';
import Reservation from '../sections/Reservation';
import Testimonials from '../sections/Testimonials';
import SpecialEvents from '../sections/SpecialEvents';
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
        <ChefsSpecial />
        <InteractiveMenu />
        <DiningExperience />
        <Gallery />
        <SpecialEvents />
        <Testimonials />
        <Stats />
        <Reservation />
        <InstagramFeed />
        <PremiumCTA />
      </main>

      <Footer />
    </div>
  );
}
