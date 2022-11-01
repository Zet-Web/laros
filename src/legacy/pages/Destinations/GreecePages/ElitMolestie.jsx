import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { DestinationTextRegion } from '../../../components/DestinationText'

import { ReactComponent as ElitMolestieSvg } from '../../../svg/GreeceSvg/elti__molestie.svg'

import { ReactComponent as GreeceDestinationMacedonia } from '../../../svg/DestinationGreece/macedonia__small.svg'
import { ReactComponent as GreeceDestinationsNibnSagittis } from '../../../svg/DestinationGreece/nibn__sagittis-small.svg'
import { ReactComponent as GreeceDestinationsElitMolestie } from '../../../svg/DestinationGreece/elit__molestie-small.svg'
import { ReactComponent as GreeceDestinationsAttica } from '../../../svg/DestinationGreece/attica__small.svg'
import { ReactComponent as GreeceDestinationsLonian } from '../../../svg/DestinationGreece/lonian__islands-small.svg'
import { ReactComponent as GreeceDestinationsEagean } from '../../../svg/DestinationGreece/aegean__small.svg'
import { ReactComponent as GreeceDestinationsCyclades } from '../../../svg/DestinationGreece/cyclades__small.svg'
import { ReactComponent as GreeceDestinationsCrete } from '../../../svg/DestinationGreece/crete__small.svg'

import '../Destinations.scss'

export const ElitMolestie = () => {
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
          <ElitMolestieSvg className='elti__molestie' />

          <div className='location__elti-molestie'>
            <img
              className='famagusta__icon'
              src='/images/map-pin-location.svg'
              alt='location'
            />
            <span className='location__text'>Elit molestie</span>
          </div>
        </div>
        <div>
          <CustomScrollbars className='' style={{ width: 300, height: 300 }}>
            <div className='tab__regions'>
              <NavLink to='/destinations/macedonia'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationMacedonia fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Macedonia</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/nibn-sagittis'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsNibnSagittis fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Nibh sagittis</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/elti-molestie'>
                <div className='tab__item'>
                  <button className='active__tab-region active__tab-region-elti'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsElitMolestie fill='#F5BC2E' />
                      </div>
                      <div>
                        <span className='tab__font'>Elit molestie</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/aegean'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsAttica fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Eagean</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/lonian-islands'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsLonian fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Lonian Islands</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/aegean'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsEagean fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Aegean</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/cyclades'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsCyclades fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Cyclades</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to='/destinations/crete'>
                <div className='tab__item'>
                  <button className='tab__country'>
                    <div className='country__view-content'>
                      <div className='svg__icon'>
                        <GreeceDestinationsCrete fill='#CED9E5' />
                      </div>
                      <div>
                        <span className='tab__font'>Crete</span>
                      </div>
                    </div>
                  </button>
                </div>
              </NavLink>
            </div>
          </CustomScrollbars>
          <div className='widget__scroll'></div>
          <DestinationTextRegion />
        </div>

        <Link to='/destinations' className='go__back-cyprus'>
          <img src='/images/back__arrow.svg' alt='back arrow' />
          <span className='go__back-cyprus--span'>Go back to Greece Map</span>
        </Link>
      </div>

      <div className='areas__region'>
        <div className='title__areas'>
          <span>Areas of Macedonia</span>
        </div>
        <p className='text__areas'>
          At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
          in orci, pretium nulla volutpat leo.
        </p>

        <div className='picture__list-areas'>
          <div className='picture__item-area'>
            <img
              src='/images/pictures-regions/west__macedonia.jpg'
              alt='west macedoni picture'
            />
            <p className='picture__item-text'>Western Macedonia</p>
          </div>
          <div className='picture__item-area'>
            <img
              src='/images/pictures-regions/central__macedonia.jpg'
              alt='central macedoni picture'
            />
            <p className='picture__item-text'>Central Macedonia</p>
          </div>
          <div className='picture__item-area'>
            <img
              src='/images/pictures-regions/east__macedonia.jpg'
              alt='east macedoni picture'
            />
            <p className='picture__item-text'>Eastern Macedonia</p>
          </div>
        </div>
      </div>
    </>
  )
}
