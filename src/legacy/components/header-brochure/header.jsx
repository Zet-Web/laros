import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import { ItemsInCart } from '../items-in-cart'
import './header.css'

export const Header = () => {
  return (
    <div className='header__brochure'>
      <div>
        <h1 className='brochure__title'>Brochures</h1>
        <p className='brochure__text'>
          Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat
          morbi proin. Massa quis montes, scelerisque commodo elit erat in urna
          id. Purus sit odio egestas venenatis viverra blandit amet vitae.
        </p>
      </div>

      <div className='wrapper header__cart-btn-wrapper'>
        <CartBlock />
        {/* <ItemsInCart /> */}
      </div>
    </div>
  )
}
