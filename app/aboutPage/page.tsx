//Import Pages
import AbouSection from "./partials/abouSection";
import InstaSection from "./partials/instaSection";

function AboutPage() {
  return (
    <div className="relative mb-28">
      <AbouSection />
      {/* Instagram Photos */}
      <div className="mt-16 grid place-items-center">
        <InstaSection />
      </div>
    </div>
  );
}

export default AboutPage;
