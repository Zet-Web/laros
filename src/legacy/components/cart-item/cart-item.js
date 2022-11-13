import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../store/cart/reducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './CartItem.scss'

export const CartItem = ({ name, topic, id, image, file }) => {
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id))
  }

  return (
    <div className='cart-item'>
      <img
        className='selected__brochure-img'
        src={image}
        alt='selected brochure'
      />
      <div className='content__cart-item'>
        <div className='cart__item-topic'>
          <span>{topic}</span>
        </div>
        <div className='cart__item-title'>
          <span>{name} </span>
        </div>
      </div>
      <div className='cart-item__price'>
        <button onClick={handleDeleteClick} className='btn__cart-border'>
          <div className='div__cart-box'></div>
        </button>
      </div>
    </div>
  )
}
