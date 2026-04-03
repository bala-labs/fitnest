import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import AboutPage from './pages/AboutPage'
import ClassesPage from './pages/ClassesPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import JoinPage from './pages/JoinPage'
import ServicesPage from './pages/ServicesPage'

function FitNestHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('fitnest-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('fitnest-theme', theme)
  }, [theme])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/services', label: 'Services' },
      { to: '/about', label: 'About Us' },
    ],
    [],
  )

  return (
    <header className="appHeader">
      <div className="container headerInner">
        <Link className="brand" to="/" aria-label="FitNest Home">
          <span className="brandDot" aria-hidden="true" />
          FitNest
        </Link>

        <nav className="navLinks" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              className={({ isActive }) => `navLink${isActive ? ' active' : ''}`}
              to={l.to}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="headerRight">
          <button
            type="button"
            className="themeToggle"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            className="hamburgerBtn"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <div className="hamburgerIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      <div className={`mobileMenu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="container" style={{ padding: 0 }}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

function FitNestFooter() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerBrand">
          <div className="brand" style={{ fontSize: '1.1rem' }}>
            <span className="brandDot" aria-hidden="true" />
            FitNest
          </div>
          <p className="footerTagline">
            Train smarter. Progress consistently. Feel at home.
          </p>

          <div className="footerSocial" aria-label="Social links">
            <a className="socialBtn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a className="socialBtn" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
            <a className="socialBtn" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="footerCol">
          <div className="footerColTitle">Contact</div>
          <div className="footerRow">
            <i className="fa fa-map-marker-alt" aria-hidden="true" />
            <span>FitNest GYM, Anna Nagar, Chennai - 600040</span>
          </div>
          <div className="footerRow">
            <i className="fa fa-phone" aria-hidden="true" />
            <a className="footerLink" href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>
          <div className="footerRow">
            <i className="fa fa-envelope" aria-hidden="true" />
            <a className="footerLink" href="mailto:fitnest@gmail.com">
              fitnest@gmail.com
            </a>
          </div>
        </div>

        <div className="footerCol">
          <div className="footerColTitle">Quick links</div>
          <div className='footerLinks'>
            <Link className="footerLink" to="/">
              Home
            </Link>
            <Link className="footerLink" to="/services">
              Services
            </Link>
            <Link className="footerLink" to="/about">
              About
            </Link>
            <Link className="footerLink" to="/classes">
              Classes
            </Link>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <span>&copy; 2025 FitNest GYM. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <FitNestHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <FitNestFooter />
    </>
  )
}

