import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.scss'

export const Navigation = () => {
  return (
    <nav className='nav__list'>
      <div className='between__item'></div>
      <NavLink className='nav__item' to='/destinations'>
        <span>Destinations</span>
      </NavLink>
      <NavLink className='nav__item' to='/trip-planner'>
        <span>Trip planner</span>
      </NavLink>
      <NavLink className='nav__item' to='/'>
        <span>Hotels</span>
      </NavLink>
      <NavLink className='nav__item' to='/'>
        <span>Special offers</span>
      </NavLink>
      <NavLink className='nav__item' to='/'>
        <span>Inspiration</span>
      </NavLink>
      <div className='between__item'></div>
    </nav>
  )
}
