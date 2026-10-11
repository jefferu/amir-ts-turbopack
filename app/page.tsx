import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import PhotoShowcase from "@/components/PhotoShowcase";
import TrainerSpotlight from "@/components/TrainerSpotlight";
import LessonTracks from "@/components/LessonTracks";
import Facilities from "@/components/Facilities";
import FeatureGrid from "@/components/FeatureGrid";
import BookingTerminal from "@/components/BookingTerminal";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-surface-base text-on-surface min-h-screen flex flex-col selection:bg-border-highlight selection:text-surface-base">
      <Header />
      <main className="w-full pt-[108px] bg-surface-base min-h-screen flex-1">
        <div className="flex flex-col w-full text-on-surface">
          <Hero />
          <Methodology />
          <PhotoShowcase />
          <TrainerSpotlight />
          <LessonTracks />
          <Facilities />
          <FeatureGrid />
          <BookingTerminal />
          <SocialProof />
        </div>
      </main>
      <Footer />
    </div>
  );
}
