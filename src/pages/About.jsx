import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutHero from '../sections/about/AboutHero';
import OurStory from '../sections/about/OurStory';
import OurPhilosophy from '../sections/about/OurPhilosophy';
import MeetTheChef from '../sections/about/MeetTheChef';
import BehindTheKitchen from '../sections/about/BehindTheKitchen';
import DiningExperienceAbout from '../sections/about/DiningExperienceAbout';
import RestaurantTimeline from '../sections/about/RestaurantTimeline';
import AwardsRecognition from '../sections/about/AwardsRecognition';
import GalleryPreview from '../sections/about/GalleryPreview';
import ClosingStatement from '../sections/about/ClosingStatement';

export default function About() {
  return (
    <div className="bg-matteBlack min-h-screen text-softIvory selection:bg-champagneGold selection:text-matteBlack">
      <Header />
      
      <main>
        <AboutHero />
        <OurStory />
        <OurPhilosophy />
        <MeetTheChef />
        <BehindTheKitchen />
        <DiningExperienceAbout />
        <RestaurantTimeline />
        <AwardsRecognition />
        <GalleryPreview />
        <ClosingStatement />
      </main>

      <Footer />
    </div>
  );
}
