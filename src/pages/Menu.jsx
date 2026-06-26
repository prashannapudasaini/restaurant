import Header from '../components/Header';
import InteractiveMenu from '../sections/InteractiveMenu';
import Footer from '../components/Footer';

export default function Menu() {
  return (
    <div className="bg-charcoal min-h-screen text-warmIvory">
      <Header />
      
      <main className="pt-24">
        <InteractiveMenu />
      </main>

      <Footer />
    </div>
  );
}
