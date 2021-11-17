import Container from '../Container'
import MenuItem from '../MenuItem'
import * as Text from '../Text'

import styles from '../../styles/components/sections/DailySpecials.module.scss'

export default function DailySpecials(props) {
  return (
    <div className={styles.DailySpecials}>
      <Container>
        <div className={styles.SectionTitle}>
          <Text.Heading2>
            Specials
          </Text.Heading2>
        </div>

        <div className={styles.ItemView}>
          <div className={styles.ItemsWrapper}>
            <div
              className={styles.Items}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem'}}
            >
              <MenuItem 
                name="Bacon, cheddar and cauliflower soup and a crostini"
                price="$6.50"
                description=""
              />

              <MenuItem
                name="Italian Meatloaf and a side house salad"
                price="$10.50"
                description=""
              />

              <MenuItem
                name="Delicious treats:"
                price=""
                description=""
              />

              <MenuItem
                name="Pumpkin Tart"
                price="$3.50 each"
                description=""
              />

              <MenuItem
                name="Apple Tart"
                price="$3.50 each"
                description=""
              />
            </div>
          </div>
          {
            props.showButton === true ? (
              <div className={styles.ButtonWrapper}>
                <OurMenuButton />
              </div>
            ) : ''
          }
        </div>
      </Container>
    </div>
  )
}

function OurMenuButton() {
  return (
    <Text.Anchor
      href="/menu"
    >
      <button className={styles.OurMenuButton}>
        See Full Menu
      </button>
    </Text.Anchor>
  )
}