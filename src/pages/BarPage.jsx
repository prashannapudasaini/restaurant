import Header from '../components/Header';
import BarHero from '../sections/BarHero';
import BarProducts from '../sections/BarProducts';
import Footer from '../components/Footer';

export default function BarPage() {
  return (
    <div className="bg-matteBlack min-h-screen text-softIvory selection:bg-champagneGold selection:text-matteBlack">
      <Header />
      
      <main>
        <BarHero />
        <BarProducts />
      </main>

      <Footer />
    </div>
  );
}
