import { FC } from 'react'
import s from './TripPlan.module.scss'
import { Button } from '../../../../components'
import Image, { StaticImageData } from 'next/image'
import hotel from '/public/assets/images/trip-planner/hotel.svg?url'

interface TripData {
  date: string
  day: number
  description: string
  hotel: string
  image: StaticImageData
}

interface TripProps {
  data: TripData[]
}

export const TripPlan: FC<TripProps> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.map((item, index, array) => {
        return (
          <div className={s.card} key={index}>
            <div className={s.textWrapper}>
              <p className={s.date}>{item.date}</p>
              <p className={s.day}>
                {`Day ${item.day}`}
                <span className={s.greyText}>{` / ${array.length}`}</span>
              </p>
              <p className={s.text}>{item.description}</p>
              <button className={s.btn}>See more</button>
              <p className={s.hotel}>
                <Image
                  className={s.image}
                  src={hotel}
                  width={16}
                  height={16}
                  alt=''
                />
                {item.hotel}
              </p>
            </div>
            <div className={s.imageWrapper}>
              <Image
                className={s.image}
                src={item.image}
                width={543}
                height={228}
                alt=''
              />
            </div>
          </div>
        )
      })}
      <div className={s.button}>
        <Button>Start trip planning</Button>
      </div>
    </div>
  )
}
