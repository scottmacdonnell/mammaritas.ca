import Container from '../Container'
import MenuItem from '../MenuItem'
import * as Text from '../Text'

import styles from '../../styles/components/sections/DailySpecials.module.scss'

export default function DailySpecials() {
  return (
    <div className={styles.DailySpecials}>
      <Container>
        <aside className={styles.Title}>
          <Text.Heading2>
            Specials
          </Text.Heading2>
        </aside>

        <div
          className={styles.Items}
          style={{ padding: '1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}
        >
          <MenuItem 
            name="Bruschetta"
            price="3pcs $7.95 / 5pcs $13.95"
            description="Diced tomatoes mixed in an aglio olio herbed blend served on toasted bread."
          />

          <MenuItem
            name="Garlic Mozzarella Bread"
            price="3pcs $5.95 / 5pcs $9.95"
            description="Crostini topped with garlic butter and fresh mozzarella."
          />

          <MenuItem
            name="Green olives"
            price="$3.95"
            description="Olives are coated with a spicy herb mixture according to olden day recipes.  Their flavour is unique, cheerfully spicy but delicate."
          />

          <MenuItem
            name="Homemade Meatballs"
            price="3 pcs $10.95 / 5 pcs $14.95"
            description="Ground beef, pork, Parmigiano Reggiano meatballs with house tomato sauce."
          />

          <MenuItem
            name="Cacciatore Sausage"
            price="$4.50"
            description="Authentic Italian, your choice of either hot or mild."
          />

          <MenuItem 
            name="Antipasto"
            price="FOR 1 $9.95 / FOR 2 $14.95"
            description="Prosciutto, salami, cheese, roasted peppers, olives, accompanied with crostini"
          />

          <MenuItem 
            name="Insalata Caesar / Caesar Salad"
            price="$7.25"
            description="Romaine, bacon, freshly grated Parmigiano, oven-baked croutons and Caesar dressing."
          />
        </div>

        <div>
          <OurMenuButton />
        </div>
      </Container>
    </div>
  )
}

function OurMenuButton() {
  return (
    <Text.Anchor
      href="/beta/menu"
    >
      <button className={styles.OurMenuButton}>
        See Full Menu
      </button>
    </Text.Anchor>
  )
}