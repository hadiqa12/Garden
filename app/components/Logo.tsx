import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="site-logo" aria-label="Gardening Home">
      <svg className="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* center */}
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />

        {/* seeds lines */}
        <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <line x1="12" y1="12" x2="20" y2="6" />
          <line x1="12" y1="12" x2="18" y2="12" />
          <line x1="12" y1="12" x2="20" y2="18" />
          <line x1="12" y1="12" x2="12" y2="4" />
          <line x1="12" y1="12" x2="6" y2="4" />
          <line x1="12" y1="12" x2="4" y2="12" />
          <line x1="12" y1="12" x2="6" y2="20" />
          <line x1="12" y1="12" x2="12" y2="20" />
        </g>

        {/* seed dots */}
        <g fill="currentColor">
          <circle cx="20" cy="6" r="0.9" />
          <circle cx="18" cy="12" r="0.9" />
          <circle cx="20" cy="18" r="0.9" />
          <circle cx="12" cy="4" r="0.9" />
          <circle cx="6" cy="4" r="0.9" />
          <circle cx="4" cy="12" r="0.9" />
          <circle cx="6" cy="20" r="0.9" />
          <circle cx="12" cy="20" r="0.9" />
        </g>
      </svg>
      <span className="logo-text">Gardening</span>
    </Link>
  )
}
