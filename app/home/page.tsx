//Import Containers
import AboutPage from '@/app/home/about/page'
import Collections from '@/app/home/collections'
import ContactPage from '@/app/home/contact'
import HomePage from '@/app/home/welcome/page'

//Import Components
import ScrollToTopButton from '@/components/navigation/ScrollToTop'

function LandingPage () {
  return (
    <div>
      <div id='home'>
        <HomePage />
      </div>
      <div id='about'>
        <AboutPage />
      </div>
      <div id='collections'>
        <Collections />
      </div>
      <div id='contact'>
        <ContactPage />
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default LandingPage
