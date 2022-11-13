import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import '../../pages/TripPlanner/PlannersComponents/SortByPlanner/SortByPlanner.scss'

export const SelectDestination = ({ value, onChangeSubRegion }) => {
  const subRegions = [
    'Attica',
    'Central Greece',
    'Central Cyrpus',
    'Crete',
    'Eastern Cyrpus and Thrace',
    'Epirus',
    'Ionian Islands',
    'North Aegean',
  ]

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <ul className='list__duration' onClick={() => setIsActive(!isActive)}>
        <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
          <div className='list__duration-content'>
            <div>
              <span className='categories__count-span'>+ add sub-region</span>
            </div>
            <div>
              <img
                className='select__arrow'
                src='/images/select__arrow.svg'
                alt='select arrow'
              />
            </div>
          </div>
          <div
            className={
              isActive
                ? 'category__duration-block--active'
                : 'category__duration-block'
            }
          >
            {subRegions.map((categorySubRegion, i) => (
              <li
                key={i}
                onClick={() => onChangeSubRegion(categorySubRegion)}
                className={
                  value === i
                    ? 'category__item-count--active'
                    : 'category__item-count'
                }
              >
                {categorySubRegion}
              </li>
            ))}
          </div>
        </OutsideClickHandler>
      </ul>
    </>
  )
}
