import React from 'react'
import { Link } from 'react-router-dom'

export function HotelBlock({
  id,
  name,
  subName,
  from,
  price,
  classPerson,
  subTraveriod,
  period,
  subDuration,
  durationCount,
  flightStart,
  likeTag,
  likeTag2,
}) {
  return (
    <>
      <div className='hotel__list-wrapper'>
        <div className='hotel__list'>
          <ul key={id}>
            <li key={name}>
              <div className={'trip__cart-item'}>
                <div className={'trip__item-cart'}>
                  <div>
                    <img
                      className={'cart__vacation-icon'}
                      src={'/images/area-images/cart__vacation-first.png'}
                      alt='picture'
                    />
                  </div>
                  <div className={'trip__cart-description'}>
                    <div className={'trip__description-block'}>
                      <div className={'trip__pre-parameter'}>
                        <span>{subName}</span>
                      </div>
                      <div className={'trip__main-parameter'}>
                        <span>{name}</span>
                      </div>
                    </div>
                    <div className={'trip__description-block'}>
                      <div className={'pre__parameter'}>
                        <span>{from}</span>
                      </div>
                      <div className={'trip__main-parameter'}>
                        <span>{price} </span>CHF
                      </div>
                      <div className={'trip__pre-parameter'}>
                        <span>{classPerson}</span>
                      </div>
                    </div>
                  </div>

                  <div className={'trip__description-less--cart'}>
                    <div className={'trip__description-block'}>
                      <div className={'trip__pre-parameter'}>
                        <span>{subTraveriod}</span>
                      </div>
                      <div className={'trip__main-subparameter'}>
                        <span>{period}</span>
                      </div>
                    </div>
                    <div
                      className={
                        'trip__description-block trip__description-block--less'
                      }
                    >
                      <div className={'pre__parameter'}>
                        <span>{subDuration}</span>
                      </div>
                      <div className={'trip__main-subparameter'}>
                        <span>{durationCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className={'trip__description-last--cart'}>
                    <div className={'trip__together-blocks'}>
                      <img
                        src='/images/area-images/flight__plane.svg'
                        alt='plane'
                      />
                      <span>{flightStart}</span>
                    </div>

                    <div className={'trip__proses-hotel'}>
                      <div
                        className={
                          'trip__pros-hotel trip__cart-hotel--blue__light'
                        }
                      >
                        <span>{likeTag}</span>
                      </div>
                      <div
                        className={
                          'trip__pros-hotel trip__cart-hotel--blue__dark'
                        }
                      >
                        <span>{likeTag2}</span>
                      </div>
                    </div>
                  </div>
                  <div className={'trip__link-offer'}>View offer</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
