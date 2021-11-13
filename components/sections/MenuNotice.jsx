import * as Text from '../Text'
import Container from '../Container'

import styles from '../../styles/components/sections/MenuNotice.module.scss'

export default function MenuNotice(props) {
  return (
    <div className={styles.MenuNotice}>
      <Container>
        <Text.SHeading>
          The quality of our ingredients and products is only surpassed by our passion for great tasting, authentic Italian meals, treats or drinks. Combined, we strive to totally satisfy your palate… more than once. To us that is the ultimate compliment.
        </Text.SHeading>
      </Container>

      <Container>
        <Text.SHeading>
          Gratuities, tax and substitutions or additions of ingredients are not included in our menu prices.
        </Text.SHeading>
      </Container>
    </div>
  )
}