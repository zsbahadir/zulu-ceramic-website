//Import Pages
import AboutSection from "./partials/aboutSection";
import InstaSection from "./partials/instaSection";

function AboutPage() {
  return (
    <div className="relative mb-28">
      <AboutSection />
      {/* Instagram Photos */}
      <div className="mt-16 grid place-items-center">
        <InstaSection />
      </div>
    </div>
  );
}

export default AboutPage;
