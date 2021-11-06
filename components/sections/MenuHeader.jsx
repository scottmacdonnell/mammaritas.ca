import * as Header from '../Header'
import * as Text from '../Text'

import styles from '../../styles/components/sections/MenuHeader.module.scss'

import headerImage from '../../public/images/menu-header.jpg'

export default function MenuHeader() {
  return (
    <div className={styles.MenuHeader}>
      <Header.Wrapper>
        <Header.Background href={headerImage} />

        <Header.Overlay>
          <div
            style={{ height: '100%', padding: '4rem 0 2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Title>
              Menu
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