//Import Containers
import AboutPage from "@/app/containers/about/page";
import Collections from "@/app/containers/collections";
import ContactPage from "@/app/containers/contact";
import HomePage from "@/app/containers/welcome/page";


//Import Components
import ScrollToTopButton from "@/components/ScrollToTop";


function Zulu() {
  return (
    <div>
      <div id = "home">
      <HomePage />
      </div>
      <div id = "about">
      <AboutPage />
      </div>
      <div id = "collections">
      <Collections/>
      </div>
      <div id = "contact">
      <ContactPage />
      </div>
      <ScrollToTopButton/>
    </div>
  );
}

export default Zulu;
