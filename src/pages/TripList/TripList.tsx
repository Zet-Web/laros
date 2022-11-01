import { FC } from 'react'
import s from './TripList.module.scss'
import { tripListMock } from 'shared/mocks/tripList'
import { TripListItem } from './TripListItem'

export const TripList: FC = () => {
  return (
    <div className={s.wrapper}>
      {tripListMock.map((el, idx) => (
        <TripListItem
          key={el.name}
          image={el.image}
          name={el.name}
          from={el.from}
          period={el.period}
          duration={el.duration}
          startPoint={el.startPoint}
          tags={el.tags}
          id={idx}
        />
      ))}
    </div>
  )
}
