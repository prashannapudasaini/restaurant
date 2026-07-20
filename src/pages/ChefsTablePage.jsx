import Header from '../components/Header';
import Footer from '../components/Footer';
import KitchenHero from '../sections/kitchen/KitchenHero';
import KitchenIntro from '../sections/kitchen/KitchenIntro';
import InteractiveTransformation from '../sections/kitchen/InteractiveTransformation';
import ChefSignaturesGrid from '../sections/kitchen/ChefSignaturesGrid';
import CinematicKitchenVideo from '../sections/kitchen/CinematicKitchenVideo';
import SeasonalTastingGrid from '../sections/kitchen/SeasonalTastingGrid';

export default function ChefsTablePage() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen text-softIvory selection:bg-champagneGold selection:text-matteBlack">
      <Header />
      
      <main>
        <KitchenHero />
        <KitchenIntro />
        <InteractiveTransformation />
        <ChefSignaturesGrid />
        <CinematicKitchenVideo />
        <SeasonalTastingGrid />
      </main>

      <Footer />
    </div>
  );
}
