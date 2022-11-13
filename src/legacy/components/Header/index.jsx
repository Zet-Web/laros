import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.scss'

export const Header = () => {
  const setActive = ({ isActive }) =>
    isActive ? 'head__nav-link--active' : 'head__nav-link'
  return (
    <>
      <div className='header__fixed'>
        <div className='header__container'>
          <header className='header'>
            <div className='head__nav-block'>
              <div className='head__nav-item'>
                <NavLink className={setActive} to='/'>
                  Home
                </NavLink>
              </div>
              <div className='head__nav-item'>
                <NavLink className={setActive} to='/'>
                  About us
                </NavLink>
                <div className='head__nav-item'>
                  <NavLink className={setActive} to='/brochure'>
                    Brochure
                  </NavLink>
                </div>
              </div>

              <div className='header__logo-head'>
                <img src='/images/logo.svg' alt='' />
              </div>

              <Link to='/'>
                <div className='head__contact-use'>
                  <img
                    className='head__sm-icon'
                    src='/images/call.svg'
                    alt='call'
                  />
                  <span>Contact us</span>
                </div>
              </Link>
            </div>

            <Link to='/'>
              <div className='head__gift'>
                <img
                  className='head__sm-icon'
                  src='/images/gift.svg'
                  alt='call'
                />
                <span> Gift voucher</span>
              </div>
            </Link>
          </header>
        </div>
      </div>
    </>
  )
}
