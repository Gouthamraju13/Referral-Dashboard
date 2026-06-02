import { useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses',  href: '#courses' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export default function Header({ search, onSearchChange, onTryFree }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <span className="header-logo-icon">📡</span>
          TopIn
        </div>

        <nav className="header-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={i === 0 ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-search">
          <span className="header-search-icon"><SearchIcon /></span>
          <input
            type="text"
            placeholder="Search…"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search referrals"
          />
        </div>

        <div className="header-right">
          <button className="header-btn-try" onClick={onTryFree}>
            Try for free
          </button>
          <div className="header-user">
            <div className="header-avatar">G</div>
            <span className="header-username">Goutham</span>
          </div>
        </div>

        <button
          className="header-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      <div className={`header-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={i === 0 ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button
          className="header-mobile-try"
          onClick={() => { onTryFree(); setMenuOpen(false) }}
        >
          🚀 Try for free
        </button>
      </div>
    </>
  )
}