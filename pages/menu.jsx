import * as Page from '../components/Page'

import GlobalNavbar from '../components/sections/GlobalNavbar'
import MenuHeader from '../components/sections/MenuHeader'
import DailySpecials from '../components/sections/DailySpecials'
import MenuView from '../components/sections/MenuView'
import MenuNotice from '../components/sections/MenuNotice'
import ContactForm from '../components/sections/ContactForm'
import GlobalFooter from '../components/sections/GlobalFooter'

import { getMenuCategories, getMenuItems } from '../lib/graphcms'

export default function MenuPage({ menuCategories, menuItems, preview }) {
  return (
    <Page.Wrapper
      slug="/menu"
      description="The quality of our ingredients and products is only surpassed by our passion for great tasting, authentic Italian meals, treats or drinks."
      img="/images/menu-og.jpg"
      className="MenuPage"
    >
      <header>
        <GlobalNavbar />
      </header>
      
      <main>
        <MenuHeader />
        <DailySpecials />
        <MenuView
          menuCategories={menuCategories}
          menuItems={menuItems}
        />
        <MenuNotice />
        <ContactForm />
      </main>

      <footer>
        <GlobalFooter />
      </footer>
    </Page.Wrapper>
  )
}

export async function getServerSideProps({ preview = false }) {
  const menuCategories = (await getMenuCategories(preview)) || []
  const menuItems = (await getMenuItems(preview)) || []
  return {
    props: { menuCategories, menuItems, preview }
  }
}