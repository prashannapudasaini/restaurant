import Header from '../components/Header';
import Gallery from '../sections/Gallery';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="bg-charcoal min-h-screen text-warmIvory">
      <Header />
      
      <main className="pt-24">
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
