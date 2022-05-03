import useSWR from 'swr'

import Container from '../Container'
import MenuItem from '../MenuItem'
import * as Text from '../Text'
import Spinner from '../Spinner'

import fetcher from '../../lib/fetcher'

import styles from '../../styles/components/sections/RestaurantClosures.module.scss'

export default function RestaurantClosures(props) {
  const { data, error } = useSWR('/api/get-restaurant-closures', fetcher)

  if (error) return <Error />

  if (!data) return <Loading />

  const { restaurantClosures } = data

  const formatDate = (d) => {
    return new Date(`${d.split('-')[1]}/${d.split('-')[2]}/${d.split('-')[0]}`)
      .toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      })
      .replace(/[,]/gm, '')
  }

  return restaurantClosures.length > 1 ? (
    <div className={styles.RestaurantClosures}>
      <Container>
        <div className={styles.SectionTitle}>
          <Text.Heading2>
            Closures
          </Text.Heading2>
        </div>

        <div className={styles.ItemView}>
          <div className={styles.ItemsWrapper}>
            <div
              className={styles.Items}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem'}}
            >
              {restaurantClosures.map(item => (
                <MenuItem
                  key={item.id}
                  name={item.title}
                  price={formatDate(item.date)}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : ''
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