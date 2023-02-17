import Image from 'next/image'
import Link from 'next/link'

import * as Header from '../Header'
import * as Text from '../Text'
import Container from '../Container'

import styles from '../../styles/components/sections/IndexHeader.module.scss'

import headerImage from '../../public/images/index-header.jpg'

export default function IndexHeader() {
  return (
    <div className={styles.IndexHeader}>
      <Header.IndexWrapper>
        <Header.Background href={headerImage} position="0% 25%" />

        <Header.Overlay>
          <div className={styles.ContentBox}>
            <div className={styles.ContentWrapper}>
              <Container>
                <div>
                  <Title>
                    Mamma Rita&apos;s Cucina
                  </Title>

                  <Subtitle>
                    <br />
                    {"We make food just like nonna—"}
                    <br />
                    {"mouthwatering and always delicious."}
                    <br />
                    <br />
                    <Text.Small>{"Hours"}</Text.Small>
                    <br />
                    {"11:30am - 7:00pm"}
                    <br />
                    <br />
                  </Subtitle>
                </div>

                <OurMenuButton />

                <Awards />
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
      href="/menu"
    >
      <button className={styles.OurMenuButton}>
        Our Menu
      </button>
    </Text.Anchor>
  )
}

function Awards() {
  return (
    <div className={styles.Awards}>
    <div>
      <link
        href="https://awards.infcdn.net/circ5_n.css"
        rel="stylesheet"
      />
      <div
        id="rest_circ5"
      >
        <div className="circ_cont">
          <div
            className="circ_img"
            style={{
              background:
                'url("https://awards.infcdn.net/img/star_red.svg") no-repeat center'
            }}
          >
            &nbsp;
          </div>
          <Link href="https://restaurantguru.com">
            <a
              target="_blank"
              className="circ_top_title">
              Restaurant Guru 2023
            </a>
          </Link>
          <span className="">Recommended</span>
          <Link href="https://restaurantguru.com/Mamma-Ritas-Cucina-Markham">
            <a
              className="circ_bot_title "
              target="_blank">
              Mamma Rita&apos;s Cucina
            </a>
          </Link>
        </div>
      </div>
    </div>
      <div>
        <Image
          src="/images/eirb22.jpeg"
          alt="Our Story"
          width={150}
          height={150}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}