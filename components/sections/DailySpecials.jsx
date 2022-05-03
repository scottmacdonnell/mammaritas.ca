import useSWR from 'swr'

import Container from '../Container'
import MenuItem from '../MenuItem'
import * as Text from '../Text'
import Spinner from '../Spinner'

import fetcher from '../../lib/fetcher'

import styles from '../../styles/components/sections/DailySpecials.module.scss'

export default function DailySpecials(props) {
  const { data, error } = useSWR('/api/get-daily-specials', fetcher)

  if (error) return <Error />

  if (!data) return <Loading />

  const { dailySpecials, dailySpecialsDate } = data
  dailySpecialsDate.split('-')

  const formattedDate = new Date(`${dailySpecialsDate.split('-')[1]}/${dailySpecialsDate.split('-')[2]}/${dailySpecialsDate.split('-')[0]}`).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }
  ).replace(/[,]/gm, '')

  return (
    <div className={styles.DailySpecials}>
      <Container>
        <div className={styles.SectionTitle}>
          <Text.Heading2>
            Specials
          </Text.Heading2>
        </div>

        <div className={styles.ItemView}>
          <div className={styles.ItemsWrapper}>
            <div
              className={styles.Items}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem'}}
            >
              <div className={styles.Date}>
                {formattedDate}
              </div>
              {dailySpecials.map(item => (
                <MenuItem
                  key={item.url}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          {
            props.showButton === true ? (
              <div className={styles.ButtonWrapper}>
                <OurMenuButton />
              </div>
            ) : ''
          }
        </div>
      </Container>
    </div>
  )
}

function OurMenuButton() {
  return (
    <Text.Anchor
      href="/menu"
    >
      <button className={styles.OurMenuButton}>
        See Full Menu
      </button>
    </Text.Anchor>
  )
}

function Loading() {
  return (
    <div className={styles.DailySpecials}>
      <Container>
        <div className={styles.Loading}>
          <Spinner />
        </div>
      </Container>
    </div>
  )
}

function Error() {
  return (
    <div className={styles.DailySpecials}>
      <Container>
        <div className={styles.Loading}>
          <Text.Paragraph>We apologize for the inconvenience.</Text.Paragraph>
        </div>
      </Container>
    </div>
  )
}