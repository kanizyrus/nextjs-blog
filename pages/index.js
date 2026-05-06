import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1>Building fast products and writing about the craft.</h1>
        <p>
          Welcome to kaniz.dev — a technical portfolio featuring an interactive resume, deep-dive blog posts, and application case studies.
        </p>
      </section>

      <section>
        <h2>Explore</h2>
        <ul>
          <li><Link href="/resume">Interactive Resume</Link></li>
          <li><Link href="/blog">Technical Blog (Hashnode CMS)</Link></li>
          <li><Link href="/projects">Applications Portfolio</Link></li>
        </ul>
      </section>
    </Layout>
  )
}
