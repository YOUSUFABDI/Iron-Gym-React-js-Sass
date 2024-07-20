import footerStyle from './footer.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={footerStyle.footer_cotainer}>
      <div className={footerStyle.footer_top}>
        <h1>
          Iron <span>Gym</span>
        </h1>
        <ul className={footerStyle.footer_nav_links}>
          <li>
            <NavLink
              className={({ isActive }) =>
                footerStyle['nav_links_btn'] +
                (isActive ? ' ' + footerStyle.activated : '')
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                footerStyle['nav_links_btn'] +
                (isActive ? ' ' + footerStyle.activated : '')
              }
              to="/service"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                footerStyle['nav_links_btn'] +
                (isActive ? ' ' + footerStyle.activated : '')
              }
              to="/trainers"
            >
              Trainers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                footerStyle['nav_links_btn'] +
                (isActive ? ' ' + footerStyle.activated : '')
              }
              to="/testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                footerStyle['nav_links_btn'] +
                (isActive ? ' ' + footerStyle.activated : '')
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={footerStyle.footer_bottom}>
        <div className={footerStyle.line}></div>
        <span>Privacy | Terms and condition</span>
        <span>&copy; 2024 All rights reserved. IronGym Company</span>
      </div>
    </section>
  )
}

export default Footer
