import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'

import { ReactComponent as CyprusSubReg1 } from '../../svg/CyprusSvg/cyprus__subregion1.svg'
import { ReactComponent as CyprusSubReg2 } from '../../svg/CyprusSvg/cyprus__subregion2.svg'
import { ReactComponent as CyprusSubReg3 } from '../../svg/CyprusSvg/cyprus__subregion3.svg'
import { ReactComponent as CyprusSubReg4 } from '../../svg/CyprusSvg/cyprus__subregion4.svg'
import { ReactComponent as CyprusSubReg5 } from '../../svg/CyprusSvg/cyprus__subregion5.svg'
import { ReactComponent as CyprusSubReg6 } from '../../svg/CyprusSvg/cyprus__subregion6.svg'

import './DestinationMaps.scss'

export const Cyprus = () => {
  const [isShown, setIsShown] = useState(false)

  const isShownNumber = index => {
    setIsShown(index)
  }

  return (
    <>
      <Link to='/destinations/paphos'>
        <CyprusSubReg1
          className='cyprus__sub-reg--1'
          fill='transparent'
          onMouseEnter={() => setIsShown(1) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 1 && setIsShown(false)
        }}
      >
        {isShown === 1 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--15'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img src='/images/nicosia.jpg' alt='cart picture image' />
            </div>
            <h3 className='destination__cart-title'>Paphos</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link
                className='link__detail-cart--map'
                to='/destinations/paphos'
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/nicosia'>
        <CyprusSubReg2
          className='cyprus__sub-reg--2'
          fill='transparent'
          onMouseEnter={() => setIsShown(2) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 2 && setIsShown(false)
        }}
      >
        {isShown === 2 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--16'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img src='/images/nicosia.jpg' alt='cart picture image' />
            </div>
            <h3 className='destination__cart-title'>Nicosia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link
                className='link__detail-cart--map'
                to='/destinations/nicosia'
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/limassol'>
        <CyprusSubReg3
          className='cyprus__sub-reg--3'
          fill='transparent'
          onMouseEnter={() => setIsShown(3) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 3 && setIsShown(false)
        }}
      >
        {isShown === 3 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--17'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img src='/images/nicosia.jpg' alt='cart picture image' />
            </div>
            <h3 className='destination__cart-title'>Limassol</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link
                className='link__detail-cart--map'
                to='/destinations/limassol'
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/lamaca'>
        <CyprusSubReg4
          className='cyprus__sub-reg--4'
          fill='transparent'
          onMouseEnter={() => setIsShown(4) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 4 && setIsShown(false)
        }}
      >
        {isShown === 4 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--18'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img src='/images/nicosia.jpg' alt='cart picture image' />
            </div>
            <h3 className='destination__cart-title'>Lamaca</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link
                className='link__detail-cart--map'
                to='/destinations/lamaca'
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/cyprus'>
        <CyprusSubReg5
          className='cyprus__sub-reg--5'
          fill='transparent'
          onMouseEnter={() => setIsShown(5) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 5 && setIsShown(false)
        }}
      >
        {isShown === 5 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--19'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img src='/images/nicosia.jpg' alt='cart picture image' />
            </div>
            <h3 className='destination__cart-title'>Famagusta</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link
                className='link__detail-cart--map'
                to='/destinations/cyprus'
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>

      <Link to='/destinations/kyrenia'>
        <CyprusSubReg6
          className='cyprus__sub-reg--6'
          fill='transparent'
          onMouseEnter={() => setIsShown(6) && setIsShown(true)}
        />
      </Link>

      <OutsideClickHandler
        onOutsideClick={() => {
          isShown === 6 && setIsShown(false)
        }}
      >
        {isShown === 6 && (
          <div
            className={
              isShown
                ? 'destination__cart-shown destination__cart-shown--20'
                : 'hidden'
            }
          >
            <div className='destination__cart-picture'>
              <img src='/images/nicosia.jpg' alt='cart picture image' />
            </div>
            <h3 className='destination__cart-title'>Kyrenia</h3>
            <p className='destination__cart-text'>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
            <div className='link__block-destination--map'>
              <Link
                className='link__detail-cart--map'
                to='/destinations/kyrenia'
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </>
  )
}
