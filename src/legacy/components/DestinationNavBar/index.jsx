import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DestinationText } from '../DestinationText'
import { Greece } from '../DestinationMaps/Greece'
import { Cyprus } from '../DestinationMaps/Cyprus'
import { Worldwide } from '../DestinationMaps/Worldwide'
import { ReactComponent as GreeceSvg } from '../../svg/tab-icons/greece__tab.svg'
import { ReactComponent as CyprusSvg } from '../../svg/tab-icons/cyprus__tab.svg'
import { ReactComponent as WorldwideSvg } from '../../svg/tab-icons/worldwide__tab.svg'

import './DestinationNavBar.scss'

export const DestinationNavBar = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <>
      <div className='tabs__country'>
        <div className='tab__item'>
          <button
            className={
              toggleState === 1 ? 'active__tab-country' : 'tab__country'
            }
            onClick={() => toggleTab(1)}
          >
            <div className='country__view-content'>
              <div className='svg__icon'>
                {toggleState === 1 ? (
                  <GreeceSvg fill='#0ABAEE' />
                ) : (
                  <GreeceSvg fill='#CED9E5' />
                )}
              </div>
              <div>
                <span className='tab__font'>Greece</span>
              </div>
            </div>
          </button>
        </div>

        <div className='tab__item'>
          <button
            className={
              toggleState === 2
                ? 'active__tab-country active__tab-country--2'
                : 'tab__country'
            }
            onClick={() => toggleTab(2)}
          >
            <div className='country__view-content'>
              <div className='svg__icon'>
                {toggleState === 2 ? (
                  <CyprusSvg fill='#0ABAEE' />
                ) : (
                  <CyprusSvg fill='#CED9E5' />
                )}
              </div>
              <div>
                <span className='tab__font'>Cyprus</span>
              </div>
            </div>
          </button>
        </div>

        <div className='tab__item'>
          <button
            className={
              toggleState === 3
                ? 'active__tab-country active__tab-country--3'
                : 'tab__country'
            }
            onClick={() => toggleTab(3)}
          >
            <div className='country__view-content'>
              <div className='svg__icon'>
                {toggleState === 3 ? (
                  <WorldwideSvg fill='#0ABAEE' />
                ) : (
                  <WorldwideSvg fill='#CED9E5' />
                )}
              </div>
              <div>
                <span className='tab__font'>Worldwide</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className='content__tabs'>
        <div
          className={
            toggleState === 1
              ? 'country__content active__country-content'
              : 'content'
          }
        >
          <div className='out__content'>
            <Link to='/destinations'>
              <Greece />
            </Link>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? 'country__content  active__country-content'
              : 'content'
          }
        >
          <div className='out__content'>
            <Cyprus />
          </div>
        </div>

        <div
          className={
            toggleState === 3
              ? 'country__content  active__country-content'
              : 'content'
          }
        >
          <div className='out__content'>
            <Worldwide />
          </div>
        </div>
      </div>

      <DestinationText />
    </>
  )
}
