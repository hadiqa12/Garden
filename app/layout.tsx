import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import MobileMenu from './components/MobileMenu'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

export const metadata: Metadata = {
  title: 'Gardening Website',
  description: 'A small Next.js site about gardening',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/companion-gardening">Companion Gardening</Link>
            <Link href="/plants">Plants</Link>
            <Link href="/whats-my-zone">What&apos;s My Zone?</Link>
          </nav>
          <SearchBar />
          <MobileMenu />
        </header>

        <main className="container">{children}</main>

        <footer className="footer">© {new Date().getFullYear()} Gardening Website</footer>
        <Analytics />
      </body>
    </html>
  )
}
