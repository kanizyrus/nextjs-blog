import Layout from '../components/layout'
import { fetchHashnodePosts } from '../lib/hashnode'

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1>Technical Blog</h1>
      <p>Powered by Hashnode as a headless CMS.</p>
      {posts.length === 0 ? (
        <p>No posts found yet. Connect your Hashnode publication host in <code>NEXT_PUBLIC_HASHNODE_HOST</code>.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <h3>{post.title}</h3>
              <p>{post.brief}</p>
              <small>{new Date(post.publishedAt).toDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const host = process.env.NEXT_PUBLIC_HASHNODE_HOST || ''
  const posts = await fetchHashnodePosts(host)

  return {
    props: { posts },
    revalidate: 300
  }
}
