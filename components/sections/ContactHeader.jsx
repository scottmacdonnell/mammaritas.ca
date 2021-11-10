import * as Header from '../Header'
import * as Text from '../Text'

import styles from '../../styles/components/sections/ContactHeader.module.scss'

import headerImage from '../../public/images/contact-header.jpg'

export default function ContactHeader() {
  return (
    <div className={styles.ContactHeader}>
      <Header.Wrapper>
        <Header.Background href={headerImage} />

        <Header.Overlay>
          <div
            style={{ height: '100%', padding: '4rem 0 2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Title>
              Contact Us
            </Title>
          </div>
        </Header.Overlay>
      </Header.Wrapper>
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