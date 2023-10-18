//Import Pages
import AboutSection from "./partials/aboutSection";
import InstaSection from "./partials/instaSection";

function AboutPage() {
  return (
    <div>
      <AboutSection/>
      <div className="my-24">
      <InstaSection/>
      </div>
    </div>
  );
}

export default AboutPage;
