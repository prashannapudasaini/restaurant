import Header from '../components/Header';
import Footer from '../components/Footer';

import MenuHero from '../sections/menu/MenuHero';
import AnimatedMenuList from '../sections/menu/AnimatedMenuList';
import PhysicalMenuImages from '../sections/menu/PhysicalMenuImages';
import IngredientsPhilosophy from '../sections/menu/IngredientsPhilosophy';
import MenuHighlights from '../sections/menu/MenuHighlights';
import ReservationCTAMenu from '../sections/menu/ReservationCTAMenu';

export default function Menu() {
  return (
    <div className="bg-matteBlack min-h-screen text-softIvory selection:bg-champagneGold selection:text-matteBlack">
      <Header />
      
      <main>
        <MenuHero />
        <AnimatedMenuList />
        <PhysicalMenuImages />
        <IngredientsPhilosophy />
        <MenuHighlights />
        <ReservationCTAMenu />
      </main>

      <Footer />
    </div>
  );
}
