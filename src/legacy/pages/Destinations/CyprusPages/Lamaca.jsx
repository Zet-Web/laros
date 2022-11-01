import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { DestinationTextRegion } from '../../../components/DestinationText'

import { ReactComponent as LamacaSvg } from '../../../svg/DestinationCyprus/map/Lamaca.svg'

import { ReactComponent as CyprusDestination1 } from '../../../svg/DestinationCyprus/small__one.svg'
import { ReactComponent as CyprusDestination2 } from '../../../svg/DestinationCyprus/small__two.svg'
import { ReactComponent as CyprusDestination3 } from '../../../svg/DestinationCyprus/small__three.svg'
import { ReactComponent as CyprusDestination4 } from '../../../svg/DestinationCyprus/small__four.svg'
import { ReactComponent as CyprusDestination5 } from '../../../svg/DestinationCyprus/small__five.svg'
import { ReactComponent as CyprusDestination6 } from '../../../svg/DestinationCyprus/small__six.svg'

export const Lamaca = () => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(0, 60, 118, 0.25)',
      position: 'absolute',
      marginLeft: '-45px',
      marginTop: '30px',
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

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <>
      <div className='region__container'>
        <div className='region__map'>
          <LamacaSvg className='region__famagusta' />
          <div className='location__lamaca'>
            <img
              className='famagusta__icon'
              src='/images/map-pin-location.svg'
              alt='location'
            />
            <span className='location__text'>Lamaca</span>
          </div>
        </div>

        <div>
          <CustomScrollbars className='' style={{ width: 300, height: 300 }}>
            <div className='tab__regions'>
              <NavLink to='/destinations/cyprus'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <CyprusDestination1 fill='#CED9E5' />{' '}
                      </div>
                      <div>
                        <span className='tab__font'>Famagusta</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/kyrenia'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <CyprusDestination2 fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Kyrenia</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/nicosia'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <CyprusDestination3 fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Nicosia</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/paphos'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <CyprusDestination4 fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Paphos</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/lamaca'>
                <div className='tab__item'>
                  <button className='active__tab-region active__tab-region--3'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <CyprusDestination5 fill='#F5BC2E' />
                      </div>
                      <div>
                        <span className='tab__font'>Lamaca</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <Link to='/destinations/limassol'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <CyprusDestination6 fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Limassol</span>
                      </div>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </CustomScrollbars>
          <div className='widget__scroll'></div>
          <DestinationTextRegion />
        </div>

        <Link to='/destinations' className='go__back-cyprus'>
          <img src='/images/back__arrow.svg' alt='back arrow' />
          <span className='go__back-cyprus--span'>Go back to Cyprus Map</span>
        </Link>
      </div>
    </>
  )
}
