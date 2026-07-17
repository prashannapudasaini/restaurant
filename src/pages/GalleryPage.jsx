import Header from '../components/Header';
import Gallery from '../sections/Gallery';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="bg-matteBlack min-h-screen text-softIvory selection:bg-champagneGold selection:text-matteBlack">
      <Header />
      
      <main className="pt-24 md:pt-32">
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
