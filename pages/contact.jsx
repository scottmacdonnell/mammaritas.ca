import * as Page from '../components/Page'

import GlobalNavbar from '../components/sections/GlobalNavbar'
import ContactHeader from '../components/sections/ContactHeader'
import ContactInfo from '../components/sections/ContactInfo'
import ContactForm from '../components/sections/ContactForm'
import GlobalFooter from '../components/sections/GlobalFooter'

export default function ContactPage() {
  return (
    <Page.Wrapper
      slug="/contact"
      description="We love to hear your feedback, feel free to reach out with any questions or inquiries!"
      img="/images/contact-og.jpg"
      className="ContactPage"
    >
      <header>
        <GlobalNavbar />
      </header>
      
      <main>
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </main>

      <footer>
        <GlobalFooter />
      </footer>
    </Page.Wrapper>
  )
}