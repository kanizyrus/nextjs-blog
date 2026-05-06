import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Kaniz'
export const siteTitle = 'kaniz.dev'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Applications' }
]

export default function Layout({ children, home }) {
  return (
    <div className={styles.pageShell}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="kaniz.dev — interactive resume, technical writing, and application portfolio." />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <div>
          <Link href="/">
            <a className={styles.brand}>kaniz.dev</a>
          </Link>
          {home && <p className={styles.tagline}>Engineer • Builder • Writer</p>}
        </div>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
