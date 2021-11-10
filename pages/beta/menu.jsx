import * as Page from '../../components/Page'

import GlobalNavbar from '../../components/sections/GlobalNavbar'
import MenuHeader from '../../components/sections/MenuHeader'
import DailySpecials from '../../components/sections/DailySpecials'
import MenuView from '../../components/sections/MenuView'
import MenuNotice from '../../components/sections/MenuNotice'
import ContactForm from '../../components/sections/ContactForm'
import GlobalFooter from '../../components/sections/GlobalFooter'

import { getMenuCategories, getMenuItems } from '../../lib/graphcms'

export default function MenuPage({ menuCategories, menuItems, preview }) {
  return (
    <Page.Wrapper
      slug="/menu"
      description="We make food just like nonna, mouthwatering and always delicious."
      img="/og.png"
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

export async function getStaticProps({ preview = false }) {
  const menuCategories = (await getMenuCategories(preview)) || []
  const menuItems = (await getMenuItems(preview)) || []
  return {
    props: { menuCategories, menuItems, preview },
  }
}