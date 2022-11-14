import React, { MouseEventHandler, useState } from 'react'
import { NextPage } from 'next'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import Login, { LoginOnCloseEventHandler } from '../Login'

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
  const [loginVisible, setLoginVisible] = useState<boolean>(false)

  const handleGoToEditorPage: MouseEventHandler<HTMLButtonElement> = (event) => {
    alert('Go to editor')
  }

  const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
    setLoginVisible(true)
  }

  const handleLoginClose: LoginOnCloseEventHandler = () => {
    setLoginVisible(false)
  }

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
      <section className={styles.operationArea}>
        <Button onClick={handleGoToEditorPage}>New Post</Button>
        <Button onClick={handleLogin}>Login</Button>
        <Login
          show={loginVisible}
          onClose={handleLoginClose}
        />
      </section>
    </div>
  )
}

export default Navbar
