import styles from '../styles/components/Tabs.module.scss'

export const Wrapper = (props) => {
  return <div className={styles.Wrapper} {...props} />
}

export const Tab = (props) => {
  const {
    className = styles.Tab,
    active = false,
    ...rest
  } = props

  return (
    <div className={styles.TabContainer}>
      <div
        className={`${className} ${active === true ? styles.ActiveTab : ''}`}
        {...rest}
      />
    </div>
  )
}