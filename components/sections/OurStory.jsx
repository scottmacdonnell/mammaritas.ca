import Image from 'next/image'

import * as Text from '../Text'
import Container from '../Container'

import styles from '../../styles/components/sections/OurStory.module.scss'

import ourStoryImage from '../../public/images/our-story.jpg'

export default function OurStory() {
  return (
    <div className={styles.OurStory}>
      <Container>
        <div className={styles.SectionTitle}>
          <Text.Heading2>
            Our Story
          </Text.Heading2>
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
              Mamma Rita&apos;s Cucina is an Italian based restaurant that offers authentic italian food options for everyone.
            </Text.SHeading>
          </div>
        </div>
      </Container>
    </div>
  )
}