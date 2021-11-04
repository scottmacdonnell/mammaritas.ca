import * as Icon from './Icon'
import { Anchor } from './Text'

import styles from '../styles/components/Social.module.scss'

export const Wrapper = (props) => {
  return (
    <div
      className={styles.Social}
      {...props}
    >
      {props.children}
    </div>
  )
}

export const Twitter = ({ username }) => {
  return (
    <span
      className={styles.Twitter}
    >
      <Anchor
        href={`https://twitter.com/${username}`}
        isExternal
      >
        <Icon.Twitter />
      </Anchor>
    </span>
  )
}

export const GitHub = ({ username }) => {
  return (
    <span
      className={styles.GitHub}
    >
      <Anchor
        href={`https://github.com/${username}`}
        isExternal
      >
        <Icon.GitHub />
      </Anchor>
    </span>
  )
}

export const Instagram = ({ username }) => {
  return (
    <span
      className={styles.Instagram}
    >
      <Anchor
        href={`https://instagram.com/${username}`}
        isExternal
      >
        <Icon.Instagram />
      </Anchor>
    </span>
  )
}

export const LinkedIn = ({ username }) => {
  return (
    <span
      className={styles.LinkedIn}
    >
      <Anchor
        href={`https://linkedin.com/in/${username}`}
        isExternal
      >
        <Icon.LinkedIn />
      </Anchor>
    </span>
  )
}