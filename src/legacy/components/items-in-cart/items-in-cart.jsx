import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import MaskedInput from 'react-text-mask'
import { Scrollbars } from 'react-custom-scrollbars'

import { CartItem } from '../cart-item'

import './items-in-cart.scss'

export const ItemsInCart = ({ quantity = 0 }) => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(0, 60, 118, 0.25)',
      zIndex: 10,
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
  }

  const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  )

  return (
    <>
      {quantity > 0 ? (
        <button
          className='items-in-cart'
          onClick={() => setIsCartMenuVisible(true)}
        >
          <span>Send me selected ({quantity})</span>
        </button>
      ) : (
        <button className='items-in-cart--none'>
          <span>Send me selected</span>
        </button>
      )}

      <div
        className={isCartMenuVisible ? 'wrapper__menu' : 'wrapper__menu-none'}
      >
        <div className={isCartMenuVisible ? 'cart-menu' : 'cart-menu--none'}>
          <CustomScrollbars
            className=''
            style={{ width: '100%', height: '100%' }}
          >
            <div className='top__cart-menu'>
              <div className='top__cart-text'>
                <span>Sending you our brochure</span>
              </div>
              <button
                className='close__btn'
                onClick={() => setIsCartMenuVisible(false)}
              >
                Close
              </button>
            </div>
            <form action='' method='POST'>
              <div className='selected__brochures'>
                <span>You selected:</span>
              </div>
              <div className='cart-menu__games-list'>
                {items.length > 0
                  ? items.map(game => (
                      <CartItem
                        key={game.id}
                        image={game.image}
                        topic={game.topic}
                        name={game.name}
                        id={game.id}
                      />
                    ))
                  : 'none'}
              </div>

              <div className='contact__info-brochure'>
                <span>Contasct info</span>
              </div>

              <div className='brochures__form'>
                <div className='brochure__item'>
                  <label className='label__input' htmlFor=''>
                    Full name and surname
                  </label>
                  <input
                    id='marker'
                    className='brochure__input-name'
                    type='text'
                    placeholder='Jon Snow'
                  />
                  <label className='label__marker' htmlFor='marker'>
                    <img src='/images/brochures/edit__pen.svg' alt='edit svg' />
                  </label>
                </div>

                <ul className='brochures__list-radio--buttons'>
                  <span className='salutation'>Salutation*</span>

                  <li className='brochure__item-radio'>
                    <label htmlFor='salutation' className='radio__item'>
                      <label
                        htmlFor='salutation'
                        className='radio__button'
                      ></label>
                      <input
                        className='radio__box'
                        type='radio'
                        id='salutation'
                        value='fronted developer'
                        name='radio'
                      />
                      <span className='radio__style'></span>
                      <span className='name__job'>Mr</span>
                    </label>
                  </li>

                  <li className='brochure__item-radio'>
                    <label htmlFor='salutation2' className='radio__item'>
                      <label
                        htmlFor='salutation2'
                        className='radio__button'
                      ></label>
                      <input
                        className='radio__box'
                        type='radio'
                        id='salutation2'
                        value='fronted developer'
                        name='radio'
                      />
                      <span className='radio__style'></span>
                      <span className='name__job'>Mrs</span>
                    </label>
                  </li>

                  <li className='brochure__item-radio'>
                    <label htmlFor='salutation3' className='radio__item'>
                      <label
                        htmlFor='salutation3'
                        className='radio__button'
                      ></label>
                      <input
                        className='radio__box'
                        type='radio'
                        id='salutation3'
                        value='fronted developer'
                        name='radio'
                      />
                      <span className='radio__style'></span>
                      <span className='name__job'>Ms</span>
                    </label>
                  </li>
                </ul>

                <div className='brochure__item-more'>
                  <input
                    id='brochure-address'
                    className='brochure__input-address'
                    type='text'
                    placeholder='Address*'
                  />
                  <div>
                    <input
                      id='more__marker'
                      className='brochure__input-more'
                      type='text'
                      placeholder='Street'
                    />
                    <input
                      id='more__marker'
                      className='brochure__input-more'
                      type='text'
                      placeholder='ZIP Code'
                    />
                    <label className='label__marker' htmlFor='more__marker'>
                      <img
                        src='/images/brochures/edit__pen.svg'
                        alt='edit svg'
                      />
                    </label>
                  </div>

                  <input
                    id='region__marker'
                    className='brochure__input-region'
                    type='text'
                    placeholder='City, Country'
                  />
                  <label className='label__marker' htmlFor='region__marker'>
                    <img src='/images/brochures/edit__pen.svg' alt='edit svg' />
                  </label>
                </div>

                <div className='brochure__item'>
                  <label className='label__input' htmlFor='marker__phone'>
                    Phone number*
                  </label>
                  <MaskedInput
                    mask={[
                      '+',
                      /[1-9]/,
                      /\d/,
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    guide={true}
                    showMask={false}
                    className='brochure__input-phone'
                    placeholder='+41 123 - 45- 67'
                    id='marker__phone'
                  />
                  <label className='label__marker' htmlFor='marker__phone'>
                    <img src='/images/brochures/edit__pen.svg' alt='edit svg' />
                  </label>
                </div>

                <div
                  className='buttons__brochure'
                  style={{ paddingBottom: '30px' }}
                >
                  <input
                    className='brochure__cancel'
                    value='Cancel'
                    type='submit'
                  />
                  <input
                    className='brochure__send'
                    value='Send'
                    type='submit'
                  />
                </div>
              </div>
            </form>
          </CustomScrollbars>
        </div>
      </div>
    </>
  )
}
