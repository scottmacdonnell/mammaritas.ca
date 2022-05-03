import { getRestaurantClosures } from '../../lib/graphcms'

export default async function Handler(_, res) {
  const restaurantClosures = (await getRestaurantClosures(false)) || []

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ restaurantClosures, msg: '200-Success' })
}