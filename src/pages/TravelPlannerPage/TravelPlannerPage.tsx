import { FC, useEffect } from 'react'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import s from './TravelPlannerPage.module.scss'
import { CategoryCard } from './CategoryCard/CategoryCard'
import { Slider } from 'features'
import bg from '/public/assets/images/trip_planner_bg.png'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getTripCategoriesThunk } from 'store/slices/trips/thunk'
export const TravelPlannerPage: FC = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.trips.categories)
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
      ></div>
      <div className={s.title}>Travel planner</div>
      <div className={s.content}>
        <div className={s.subtitle}>Our top trip categories</div>

        <Slider withNavigation slidesPerView={3.05}>
          {categories.map((card, id) => {
            return <CategoryCard {...card} key={id} vertical />
          })}
        </Slider>

        <div className={s.categories}>
          <div className={s.categoriesMore}>
            <span>More categories</span>
          </div>
        </div>
        <ul className={s.categoriesList}>
          {moreCategories.map((cat, i) => {
            return <CategoryCard {...cat} key={i} />
          })}
        </ul>
      </div>
    </div>
  )
}
