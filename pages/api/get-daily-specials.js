import { getDailySpecials } from '../../lib/graphcms'

export default async function Handler(_, res) {
  const dailySpecials = (await getDailySpecials(false)) || []

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ dailySpecials, msg: '200-Success' })
}