import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './DestinationsRequest.scss'

export const RequestPackage = () => {
  return (
    <>
      <div className='top__content-bg'>
        <h2 className='h2__title-white'>Worldwide tours</h2>
        <p className='top__content-text'>
          Ullamcorper risus interdum lorem vulputate amet id quis massa
          elementum. Massa nisl urna accumsan proin imperdiet eget. In sagittis,
          facilisi tristique non. Curabitur id amet cras iaculis netus cras at
          et massa. Laoreet nulla quis vitae sollicitudin commodo at cursus dui.
          Felis, sed sit maecenas vitae eget nulla vel.
        </p>
      </div>

      <div className='request__form'>
        <div className='top__content-form'>
          <div className='go__back-request'>
            <Link to='/destinations'>
              <img src='/images/back__arrow.svg' alt='back arrow' />
              <span className='request__span'>Go back</span>
            </Link>
          </div>

          <div className='contact__us-request'>
            <span className='contact__request-text'>
              Haven’t found what you’ve been looking for?
            </span>
            <Link className='link__contact-us' to=''>
              Contact us
            </Link>
          </div>
        </div>

        <nav className='mini__navigation'>
          <div className='list__navigation'>
            <NavLink
              to='/destinations/flight-request'
              className={({ isActive }) =>
                isActive ? 'request__link-active' : 'request__link'
              }
            >
              Flight Request
            </NavLink>
            <NavLink
              to='/destinations/request-package'
              className={({ isActive }) =>
                isActive ? 'request__link-active' : 'request__link'
              }
            >
              Request package
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}
