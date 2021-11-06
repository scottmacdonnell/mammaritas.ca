import * as Header from '../Header'
import * as Text from '../Text'
import Container from '../Container'

import styles from '../../styles/components/sections/IndexHeader.module.scss'

import headerImage from '../../public/images/index-header.jpg'

export default function IndexHeader() {
  return (
    <div className={styles.IndexHeader}>
      <Header.IndexWrapper>
        <Header.Background href={headerImage} />

        <Header.Overlay>
          <div className={styles.ContentBox}>
            <div className={styles.ContentWrapper}>
              <Container>
                <div>
                  <Title>
                    Mamma Rita&apos;s Cucina
                  </Title>

                  <Subtitle>
                    {"We make food just like nonna-"}
                    <br />
                    {"mouthwatering and always delicious."}
                  </Subtitle>
                </div>

                <OurMenuButton />
              </Container>
            </div>
          </div>
        </Header.Overlay>
      </Header.IndexWrapper>
    </div>
  )
}

function Title(props) {
  return (
    <div className={styles.Title}>
      <Text.Heading1>
        {props.children}
      </Text.Heading1>
    </div>
  )
}

function Subtitle(props) {
  return (
    <div className={styles.Subtitle}>
      <Text.SHeading>
        {props.children}
      </Text.SHeading>
    </div>
  )
}

function OurMenuButton() {
  return (
    <Text.Anchor
      href="/dev/menu"
    >
      <button className={styles.OurMenuButton}>
        Our Menu
      </button>
    </Text.Anchor>
  )
}