import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import mockImg from '/public/assets/images/trip-planner/planner__category-bg.png'
import mockVerticalImg from '/public/assets/images/trip-planner/slide__trip-planner--one.jpg'

import s from './CategoryCard.module.scss'

interface CategoryCardProps {
  id: number
  name: string
  image: string // next img TODO
  description: string
  vertical?: boolean
  key: any
}
export const CategoryCard: FC<CategoryCardProps> = ({
  id,
  name,
  description,
  image,
  vertical = false,
}) => {
  return (
    <Link href={`travel_planner/${id}`}>
      <div className={cn(s.card, { [s.vertical]: vertical })}>
        <div className={s.image}>
          <Image
            src={vertical ? mockVerticalImg : mockImg}
            layout={'fill'}
            alt={image}
          />
        </div>
        <div className={s.content}>
          <div className={s.title}>{name}</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>
    </Link>
  )
}
