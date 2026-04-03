import './globals.css'
import Link from 'next/link'
import MobileMenu from './components/MobileMenu'
import Logo from './components/Logo'

export const metadata = {
  title: 'Gardening Website',
  description: 'A small Next.js site about gardening'
}

export default function RootLayout({ children }) {
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
          </nav>
          <MobileMenu />
        </header>

        <main className="container">{children}</main>

        <footer className="footer">© {new Date().getFullYear()} Gardening Website</footer>
      </body>
    </html>
  )
}
