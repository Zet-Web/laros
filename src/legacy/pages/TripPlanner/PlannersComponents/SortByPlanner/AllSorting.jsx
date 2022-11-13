import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Categories,
  Sort,
  HotelBlock,
  HotelBlockLine,
  SelectDuration,
  SelectDestination,
} from '../../../../components/tripsComponents'

import { useAppDispatch } from '../../../../store/index'
import { selectFilter } from '../../../../store/filter/selectors'
import { selectHotelData } from '../../../../store/hotel/selectors'
import {
  setCategoryId,
  setSortDuration,
  setSubRegion,
} from '../../../../store/filter/slice'
import { fetchHotels } from '../../../../store/hotel/asyncActions'
import './SortByPlanner.scss'

export const AllSorting = () => {
  const dispatch = useAppDispatch()

  const { items } = useSelector(selectHotelData)
  const {
    categoryId,
    sort,
    currentPage,
    searchValue,
    durationId,
    subRegionId,
  } = useSelector(selectFilter)

  const onChangeCategory = React.useCallback(idx => {
    dispatch(setCategoryId(idx))
  }, [])

  const onChangeDuration = React.useCallback(idx => {
    dispatch(setSortDuration(idx))
  }, [])

  const onChangeSubRegion = React.useCallback(idx => {
    dispatch(setSubRegion(idx))
  }, [])

  const getHotels = async () => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? String(categoryId) : ''
    const duration = durationId > 0 ? String(durationId) : ''
    const subRegion = subRegionId > 0 ? String(subRegionId) : ''

    const search = searchValue

    dispatch(
      fetchHotels({
        sortBy,
        order,
        category,
        duration,
        subRegion,
        search,
        currentPage: String(currentPage),
      })
    )

    window.scrollTo(0, 0)
  }
  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    getHotels()
    // isMounted.current = true;
  }, [
    categoryId,
    durationId,
    subRegionId,
    sort.sortProperty,
    searchValue,
    currentPage,
  ])

  const hotels = items.map(obj => <HotelBlock key={obj.id} {...obj} />)
  const hotelsLine = items.map(obj => <HotelBlockLine key={obj.id} {...obj} />)
  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <div className='container'>
        <div className='content__top'>
          <Sort value={sort} />
          <div className='block__props'>
            <SelectDestination
              value={subRegionId}
              onChangeSubRegion={onChangeSubRegion}
            />
            <Categories
              value={categoryId}
              onChangeCategory={onChangeCategory}
            />
            <SelectDuration
              value={durationId}
              onChangeDuration={onChangeDuration}
            />

            <div>
              <div className='switcher'>
                <button
                  onClick={() => setIsActive(false)}
                  className={
                    !isActive ? 'btn__choose-line--active' : 'btn__choose-style'
                  }
                >
                  <img
                    src='/images/trip-planner/line__divs.svg'
                    alt='line-svg'
                  />
                </button>
                <button
                  onClick={() => setIsActive(true)}
                  className={
                    isActive ? 'btn__choose-line--active' : 'btn__choose-style'
                  }
                >
                  <img
                    src='/images/trip-planner/block__divs.svg'
                    alt='block-svg'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hotels__wrapper'>{isActive ? hotels : hotelsLine}</div>
    </>
  )
}
