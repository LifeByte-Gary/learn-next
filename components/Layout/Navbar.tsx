import React from 'react'
import { NextPage } from 'next'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navs = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Info',
    path: '/info'
  },
  {
    label: 'Tag',
    path: '/tag'
  }
]

const Navbar: NextPage = () => {
  const { asPath } = useRouter()

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>BLOG-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link
            key={nav?.label}
            href={nav?.path}
          >
            <span className={asPath === nav?.path ? styles.active : ''}>{nav?.label}</span>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Navbar
