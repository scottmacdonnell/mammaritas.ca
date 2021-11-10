import Image from 'next/image'

import SafeArea from './SafeArea'

import styles from '../styles/components/Header.module.scss'

export const IndexWrapper = (props) => {
  return (
    <div id="header" className={styles.IndexHeaderWrapper}>
      <SafeArea top />
      <div className={styles.IndexHeader} {...props} />
    </div>
  )
}

export const Wrapper = (props) => {
  return (
    <div id="header" className={styles.HeaderWrapper}>
      <SafeArea top />
      <div className={styles.Header} {...props} />
    </div>
  )
}

export const Background = ({ href, position }) => {
  return (
    <div className={styles.HeaderBackground}>
      {!href ? '' : (
        <Image 
          src={href}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          objectPosition={position}
        />
      )}
    </div>
  )
}

export function Overlay(props) {
  return (
    <div className={styles.HeaderImageOverlay}>
      <div className={styles.HeaderContent}>
        {props.children}
      </div>
    </div>
  )
}