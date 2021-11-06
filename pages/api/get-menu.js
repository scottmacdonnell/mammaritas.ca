import { getMenuCategories } from '../../lib/graphcms'

export default async function Handler(req, res) {
  const data = (await getMenuCategories(false)) || []

  res.status(200).json({ data, msg: 'Message sent successfully.' })
}