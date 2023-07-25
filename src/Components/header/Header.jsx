import header from './header.module.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isClick, setIsClick] = useState(false)

  const handleMenu = () => setIsClick(!isClick)
  const closeMobileMenu = () => setIsClick(false)

  return (
    <header className={header.header}>
      <NavLink to="/" className={header.logo}>
        <span>IRON</span>
        <span>GYM</span>
      </NavLink>

      <div className={header.menu_icon} onClick={handleMenu}>
        {isClick ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <nav className={`${header.nav_menu} ${isClick && header.active}`}>
        <div className={header.nav_links}>
          <NavLink
            className={({ isActive }) =>
              header['nav_links_btn'] + (isActive ? ' ' + header.activated : '')
            }
            to="/"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              header['nav_links_btn'] + (isActive ? ' ' + header.activated : '')
            }
            to="/service"
          >
            Service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              header['nav_links_btn'] + (isActive ? ' ' + header.activated : '')
            }
            to="/trainers"
          >
            Trainers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              header['nav_links_btn'] + (isActive ? ' ' + header.activated : '')
            }
            to="/testimonials"
          >
            Testimonial
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              header['nav_links_btn'] + (isActive ? ' ' + header.activated : '')
            }
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>

        <NavLink to="/start-now" className={header.start_btn}>
          Start Now
        </NavLink>
      </nav>

      <div className={header.line}></div>
    </header>
  )
}

export default Header
