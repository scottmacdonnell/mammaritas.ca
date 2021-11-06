import Image from 'next/image'

import * as Text from '../Text'

import styles from '../../styles/components/sections/OurStory.module.scss'

import ourStoryImage from '../../public/images/our-story.jpg'

export default function OurStory() {
  return (
    <div className={styles.OurStory}>
      <Text.Heading2>
        Our Story
      </Text.Heading2>

      <Image
        src={ourStoryImage}
        alt="Our Story"
        width={480}
        height={720}
      />

      <Text.SHeading>
        Mamma Rita&apos;s Cucina is an Italian based restaurant that offers authentic italian food options for everyone.
      </Text.SHeading>
    </div>
  )
}