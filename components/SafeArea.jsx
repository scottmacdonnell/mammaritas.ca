import styles from '../styles/components/SafeArea.module.scss'

export default function SafeArea({
  top = false,
  bottom = false
}) {
  return (
    <>
      { top ? <div className={styles.SafeAreaTop} /> : '' }
      { bottom ? <div className={styles.SafeAreaBottom} /> : '' }
    </>
  )
}