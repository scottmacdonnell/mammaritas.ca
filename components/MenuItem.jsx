
import * as Text from './Text'

import styles from '../styles/components/MenuItem.module.scss'

export default function MenuItem(props) {
  return (
    <div className={styles.MenuItem}>
      <div className={styles.Desktop}>
        <section className={styles.Head}>
          <h5 className={styles.ItemName}>{props?.name}</h5>
          <span>...................................................................................................................................................................................................................................................................................</span>
          <h5 className={styles.ItemPrice}>{props?.price}</h5>
        </section>
        <div className={styles.Body}>
          <Text.Paragraph>{props?.description}</Text.Paragraph>
        </div>
      </div>

      <div className={styles.Mobile}>
        <section className={styles.Head}>
          <h5 className={styles.ItemName}>{props?.name}</h5>
          <h5 className={styles.ItemPrice}>{props?.price}</h5>
        </section>
        <div className={styles.Body}>
          <Text.Paragraph>{props?.description}</Text.Paragraph>
        </div>
      </div>
    </div>
  )
}