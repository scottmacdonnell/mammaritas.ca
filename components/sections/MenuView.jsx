import { useState } from 'react'
import * as Tabs from '../Tabs'
import * as Text from '../Text'
import Container from '../Container'
import MenuItem from '../MenuItem'

import styles from '../../styles/components/sections/MenuView.module.scss'

export default function MenuView({ menuCategories, menuItems }) {
  const [activeTab, setActiveTab] = useState(menuCategories[0].url)

  return (
    <div className={styles.MenuView}>
      <Container>
        <div className={styles.TabSelect}>
          <Tabs.Wrapper>
            {menuCategories.map(type => (
              <Tabs.Tab
                key={type.url}
                active={activeTab === type.url}
                onClick={() => setActiveTab(type.url)}
              >
                {type.name}
              </Tabs.Tab>
            ))}
          </Tabs.Wrapper>
        </div>

        <div
          className={styles.MenuItems}
          style={{ padding: '1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}
        >
          {
            menuItems.map(
              item => item.menuCategory.url === activeTab ? (
                <MenuItem
                  key={item.url}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              ) : ''
            )
          }
        </div>
      </Container>
    </div>
  )
}