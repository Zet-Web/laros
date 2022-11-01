import { FC } from 'react'
import s from './RelatedTours.module.scss'
import { TripCard } from '../../TripCard'
import { StaticImageData } from 'next/image'

interface RelatedData {
  id: number
  name: string
  price: number
  period: string
  duration: number
  start: string
  image: string[]
  tags: string[]
}

interface RelatedProps {
  data: RelatedData[]
}

export const RelatedTours: FC<RelatedProps> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.map(item => {
        return (
          <TripCard
            key={item.id}
            id={item.id}
            images={item.image}
            name={item.name}
            price={item.price}
            period={item.start}
            duration={item.duration}
            tags={item.tags}
          />
        )
      })}
    </div>
  )
}
