import Header from '../components/Header';
import ChefsSpecial from '../sections/ChefsSpecial';
import DiningExperience from '../sections/DiningExperience';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-charcoal min-h-screen text-warmIvory">
      <Header />
      
      <main className="pt-24">
        <DiningExperience />
        <ChefsSpecial />
      </main>

      <Footer />
    </div>
  );
}
