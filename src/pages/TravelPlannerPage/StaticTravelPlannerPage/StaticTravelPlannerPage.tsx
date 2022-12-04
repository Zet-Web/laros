import { FC } from 'react'
import s from './StaticTravelPlannerPage.module.scss'
import { Overview } from './Overview'
import { ContactForm } from 'features/ContactForm'
import { Highlighted } from './Highlighted'
import { StaticTravelMock } from 'shared/mocks/staticTravel'
import { useRouter } from 'next/router'

export const StaticTravelPlannerPage: FC = () => {
  const { query } = useRouter()

  const travelPlannerInfo = StaticTravelMock.find(
    page => page.id === (query.id && +query.id)
  )
  return (
    <div className={s.wrapper}>
      <Overview
        overview={
          travelPlannerInfo?.overview
            ? travelPlannerInfo.overview
            : StaticTravelMock[0].overview
        }
      />
      <Highlighted
        highlighted={
          travelPlannerInfo?.highlighted
            ? travelPlannerInfo.highlighted
            : StaticTravelMock[0].highlighted
        }
      />
      <ContactForm />
    </div>
  )
}
