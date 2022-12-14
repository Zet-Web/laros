import { FC, useEffect } from 'react'
import { CategoryCard } from './CategoryCard'
import { Slider } from 'components'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getTripCategoriesThunk } from 'store/slices/trips/thunk'
import { useTranslate } from 'shared/hooks/useTranslate'

import { moreCategoriesMock } from 'shared/mocks/tripPlanner'

import bg from '/public/assets/images/trip_planner_bg.png'

import s from './TravelPlannerPage.module.scss'

export const TravelPlannerPage: FC = () => {
  const t = useTranslate()
  const dispatch = useAppDispatch()

  const categories = useAppSelector(state => state.trips.categories)
  // const categories = moreCategoriesMock
  const moreCategories = moreCategoriesMock

  useEffect(() => {
    dispatch(getTripCategoriesThunk())
  }, [dispatch])

  return (
    <div className={s.container}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        {' '}
      </div>

      <div className={s.content}>
        <div className={s.title}>{t('travelPlanner.title')}</div>
        <div className={s.subtitle}>{t('travelPlanner.subtitle')}</div>

        <Slider slidesPerView={3.2} withNavigation>
          {categories?.map(card => {
            return <CategoryCard {...card} key={card.id} vertical />
          })}
        </Slider>

        <div className={s.categories}>
          <div className={s.categoriesMore}>
            <span>{t('travelPlanner.moreCategoriesText')}</span>
          </div>
        </div>

        <ul className={s.categoriesList}>
          {moreCategories?.map(cat => {
            return <CategoryCard {...cat} key={cat.id} />
          })}
        </ul>
      </div>
    </div>
  )
}
