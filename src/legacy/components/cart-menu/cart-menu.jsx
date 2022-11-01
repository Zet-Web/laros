import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../cart-item'
import './cart-menu.scss'

export const CartMenu = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(true)
  const items = useSelector(state => state.cart.itemsInCart)

  return (
    <div className={isVisible ? 'wrapper__menu' : 'wrapper__menu-none'}>
      <div className={isVisible ? 'cart-menu' : 'cart-menu--none'}>
        <div className='top__cart-menu'>
          <div>
            <span>Sending you our brochure</span>
          </div>
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
        <div className='cart-menu__games-list'>
          {items.length > 0
            ? items.map(game => (
                <CartItem
                  key={game.image}
                  image={game.image}
                  price={game.price}
                  name={game.name}
                  id={game.id}
                />
              ))
            : 'cart empty :('}
        </div>
      </div>
    </div>
  )
}
