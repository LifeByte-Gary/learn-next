import React, { ReactNode } from 'react'
import { NextPage } from 'next'
import Navbar from 'components/Layout/Navbar'
import Footer from 'components/Layout/Footer'

interface Props {
  children: ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
