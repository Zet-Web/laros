import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { useForm } from 'react-hook-form'

import './Select.scss'

export const Select = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selected, setSelected] = useState('Not chosen')

  const options = ['of the airport', 'of the station', 'of the port']

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsVisible(false)
        }}
      >
        <select name='depart-form' id='depart-form'></select>
        <label
          htmlFor='depart-form'
          className='list__options'
          onClick={() => setIsVisible(!isVisible)}
        >
          {/* <div className="ticketed__status" onClick={() => setIsVisible(!isVisible)}> */}
          <span className='list__item-option'>
            <option>{selected}</option>
          </span>
          <div>
            <img
              className={isVisible ? 'arrow__down-active' : 'arrow__down'}
              src='/images/worldwide-request/arrow__down.svg'
              alt='arrow down'
            />
          </div>
          {/* </div> */}
        </label>

        {isVisible && (
          <div onClick={() => setIsVisible(false)} className='select__bar'>
            {options.map(option => (
              <div
                key={option}
                onClick={() => setSelected(option)}
                className='option__item'
              >
                <option value={selected}>{option}</option>
              </div>
            ))}
            {/* <div onClick={() => setIsVisible(false)} className="select__item_expense select__item_status">Cancel</div> */}
          </div>
        )}
      </OutsideClickHandler>
    </>
  )
}
