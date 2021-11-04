import * as Text from './Text'
import Container from './Container'
import SafeArea from './SafeArea'

import styles from '../styles/components/Footer.module.scss'

export const Wrapper = (props) => {
  return (
    <div className={styles.Wrapper}>
      <Container>
        <div className={styles.Footer} {...props} />
      </Container>
      <SafeArea bottom />
    </div>
  )
}

export const Directory = (props) => {
  return <div className={styles.Directory} {...props} />
}

export const Nav = (props) => {
  return <nav className={styles.Nav} {...props} />
}

export const NavContent = (props) => {
  return <ul {...props} />
}

export const NavItem = ({
  children,
  href,
  isExternal = false
}) => {
  return (
    <li className={styles.NavItem}>
      <Text.Anchor
        href={href}
        isExternal={isExternal}
      >
        <span>{children}</span>
      </Text.Anchor>
    </li>
  )
}

export function NavTitle(props) {
  return <span className={styles.NavTitle}><strong {...props} /></span>
}

export const Info = (props) => {
  return <div className={styles.Info} {...props} />
}

export const Tagline = (props) => {
  return <div className={styles.Tagline} {...props} />
}

export const Organization = (props) => {
  return <div className={styles.Organization} {...props} />
}

export const OrganizationLogo = (props) => {
  return <div className={styles.OrganizationLogo} {...props} />
}

export const OrganizationName = (props) => {
  return <div className={styles.OrganizationName}><Text.Heading6 {...props} /></div>
}

export const Copyright = (props) => {
  return (
    <div className={styles.Copyright}>
      <span {...props} />
    </div>
  )
}

export const SocialWrapper = (props) => {
  return <div className={styles.SocialWrapper} {...props} />
}