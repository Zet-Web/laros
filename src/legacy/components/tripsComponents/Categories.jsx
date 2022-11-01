import React from 'react'
import '../../pages/TripPlanner/PlannersComponents/SortByPlanner/SortByPlanner.scss'

const categories = [
  'Beach view',
  'Breakfast included',
  'Vitae at',
  'Vivamus consectetur',
]

// eslint-disable-next-line react/display-name
export const Categories = React.memo(({ value, onChangeCategory }) => {
  return (
    <ul className='list__categories'>
      <span className='categories__span'>Tags:</span>
      {categories.map((categoryName, i) => (
        <li
          key={i}
          onClick={() => onChangeCategory(i)}
          className={value === i ? 'category__item-active' : 'category__item'}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  )
})
