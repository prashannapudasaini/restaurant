import Header from '../components/Header';
import Reservation from '../sections/Reservation';
import SpecialEvents from '../sections/SpecialEvents';
import Footer from '../components/Footer';

export default function ReservationsPage() {
  return (
    <div className="bg-charcoal min-h-screen text-warmIvory">
      <Header />
      
      <main className="pt-24">
        <Reservation />
        <SpecialEvents />
      </main>

      <Footer />
    </div>
  );
}
