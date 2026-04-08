"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="mobile-nav">
      <button
        className={`mobile-toggle ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
        <Link href="/companion-gardening" onClick={() => setOpen(false)}>Companion Gardening</Link>
        <Link href="/plants" onClick={() => setOpen(false)}>Plants</Link>
        <Link href="/whats-my-zone" onClick={() => setOpen(false)}>What&apos;s My Zone?</Link>
      </nav>
    </div>
  )
}
