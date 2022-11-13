import React from 'react'

export const HotelBlockLine = ({
  id,
  name,
  subName,
  from,
  price,
  classPerson,
  subTraveriod,
  period,
  subDuration,
  duration,
  durationCount,
  flightStart,
  likeTag,
  likeTag2,
}) => {
  return (
    <div className='hotel__list-wrapper'>
      <div className='hotel__list'>
        <ul key={id}>
          <li key={name}>
            <div className={'trip__cart-item--line'}>
              <div className={'trip__cart-item--line'}>
                <div>
                  <img
                    className={'cart__trip-line'}
                    src={'/images/trip-planner/trip__line.png'}
                    alt='picture'
                  />
                </div>

                <div className={'trip__cart-line--description'}>
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

                <div className={'trip__description-less--trip__line'}>
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

                <div className={'trip__description-last--cart__line'}>
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

                <div className={'trip__link-line--offer'}>View offer</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
