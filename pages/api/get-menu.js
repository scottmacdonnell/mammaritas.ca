import { getMenuCategories, getMenuItems } from '../../lib/graphcms'

export default async function Handler(_, res) {
  const menuCategories = (await getMenuCategories(false)) || []
  const menuItems = (await getMenuItems(false)) || []

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ menuCategories, menuItems, msg: '200-Success' })
}