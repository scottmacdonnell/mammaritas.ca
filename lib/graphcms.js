async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_CONTENT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.log(process.env.GRAPHCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getMenuCategories(preview) {
  const data = await fetchAPI(
    `
      query GetMenuCategories {
        menuCategories {
          name,
          url
        }
      }
    `,
    { preview }
  )

  return data.menuCategories
}

export async function getMenuItems(preview) {
  const data = await fetchAPI(
    `
      query GetMenuItems {
        menuItems {
          price
          name
          description
          url
          menuCategory {
            url
            name
          }
        }
      }
    `,
    { preview }
  )

  return data.menuItems
}

export async function getDailySpecials(preview) {
  const data = await fetchAPI(
    `
      query GetDailySpecials {
        dailySpecials {
          price
          name
          description
          url
        }
      }
    `,
    { preview }
  )

  return data.dailySpecials
}