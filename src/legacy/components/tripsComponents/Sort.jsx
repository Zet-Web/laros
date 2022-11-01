import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from '../../store/filter/slice'
import { Sort as SortType, SortPropertyEnum } from '../../store/filter/types'
import '../../pages/TripPlanner/PlannersComponents/SortByPlanner/SortByPlanner.scss'

export const sortList = [
  { name: 'A-Z', sortProperty: SortPropertyEnum.TITLE_ASC },
]

// eslint-disable-next-line react/display-name
export const Sort = React.memo(({ value }) => {
  const dispatch = useDispatch()
  const sortRef = React.useRef(null)

  const onClickListItem = obj => {
    dispatch(setSort(obj))
  }

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__span'>
        <span>From</span>
      </div>
      <div className='sort__popup'>
        <ul>
          {sortList.map((obj, i) => (
            <li
              key={i}
              onClick={() => onClickListItem(obj)}
              className={
                value.sortProperty === obj.sortProperty
                  ? 'sort__item'
                  : 'sort__item-active'
              }
            >
              <span className='sort__item-span'>{obj.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})
