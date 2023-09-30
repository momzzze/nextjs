import React from 'react'
import styles from './styles.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'About page for my app',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <nav>About Navbar</nav>
        <main className={styles.main}>
            {children}
        </main>
    </>
  )
}
