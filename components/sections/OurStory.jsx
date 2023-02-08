import Image from 'next/image'
import Link from 'next/link'

import * as Text from '../Text'
import Container from '../Container'

import styles from '../../styles/components/sections/OurStory.module.scss'

import ourStoryImage from '../../public/images/our-story.jpg'

export default function OurStory() {
  return (
    <div className={styles.OurStory}>
      <Container>
        <div className={styles.SectionTitle}>
          <Text.Heading2>Our Story</Text.Heading2>
        </div>
        <div className={styles.ItemsWrapper}>
          <div className={styles.Items}>
            <Image
              src={ourStoryImage}
              alt="Our Story"
              width={800}
              height={600}
              objectFit="cover"
              objectPosition="center"
            />

            <Text.SHeading>
              Mamma Rita&apos;s Cucina is an Italian based restaurant that
              offers authentic italian food options for everyone.
            </Text.SHeading>
            <div className={styles.Awards}>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}