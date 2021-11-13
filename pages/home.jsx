import * as Page from '../components/Page'

import GlobalNavbar from '../components/sections/GlobalNavbar'
import IndexHeader from '../components/sections/IndexHeader'
import DailySpecials from '../components/sections/DailySpecials'
import OurStory from '../components/sections/OurStory'
import ContactForm from '../components/sections/ContactForm'
import GlobalFooter from '../components/sections/GlobalFooter'

export default function IndexPage() {
  return (
    <Page.Wrapper
      slug="/"
      description="We make food just like nonna, mouthwatering and always delicious."
      img="/og.png"
      className="IndexPage"
    >
      <header>
        <GlobalNavbar />
      </header>
      
      <main>
        <IndexHeader />
        <DailySpecials showButton />
        <OurStory />
        <ContactForm />
      </main>

      <footer>
        <GlobalFooter />
      </footer>
    </Page.Wrapper>
  )
}