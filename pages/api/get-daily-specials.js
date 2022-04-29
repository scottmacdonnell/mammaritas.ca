import { getDailySpecials, getDailySpecialsDate } from '../../lib/graphcms'

export default async function Handler(_, res) {
  const dailySpecials = (await getDailySpecials(false)) || []
  const dailySpecialsDate = (await getDailySpecialsDate(false)) || []

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ dailySpecialsDate, dailySpecials, msg: '200-Success' })
}