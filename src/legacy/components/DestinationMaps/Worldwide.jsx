import React from 'react'
import { Link } from 'react-router-dom'

export const Worldwide = () => {
  return (
    <div className='wd__bg'>
      <div className='wd__bg-wrapper'>
        <h1 className='worldwide__title'>Worldwide tours</h1>
        <p className='worldwide__text'>
          Turpis morbi nec enim id nulla vehicula condimentum. Curabitur
          fermentum vitae condimentum eu non imperdiet.
        </p>
        <div className='worldwide__links'>
          <Link
            className='worldwide__link-flight'
            to='/destinations/flight-request'
          >
            Flight request
          </Link>
          <Link
            className='worldwide__link-package'
            to='/destinations/request-package'
          >
            Request package
          </Link>
        </div>
      </div>
    </div>
  )
}
