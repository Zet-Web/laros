import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import '../../pages/TripPlanner/PlannersComponents/SortByPlanner/SortByPlanner.scss'

export const SelectDuration = ({ value, onChangeDuration }) => {
  const durations = ['3-21', '5', '7', '10', '14', '21']
  const [isActive, setIsActive] = useState(false)

  return (
    <ul className='list__duration' onClick={() => setIsActive(!isActive)}>
      <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
        <div className='list__duration-content'>
          <div>
            <span className='categories__count-span'>duration</span>
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
          {durations.map((categoryCount, i) => (
            <li
              key={i}
              onClick={() => onChangeDuration(i)}
              className={
                value === i
                  ? 'category__item-count--active'
                  : 'category__item-count'
              }
            >
              {categoryCount}
            </li>
          ))}
        </div>
      </OutsideClickHandler>
    </ul>
  )
}
