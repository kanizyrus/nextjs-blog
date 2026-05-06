const HASHNODE_API_URL = 'https://gql.hashnode.com/'

export async function fetchHashnodePosts(username) {
  if (!username) return []

  const query = `
    query PublicationPosts($host: String!) {
      publication(host: $host) {
        posts(first: 10) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { host: username } })
    })
    const json = await response.json()
    const edges = json?.data?.publication?.posts?.edges || []
    return edges.map((edge) => edge.node)
  } catch (e) {
    return []
  }
}
