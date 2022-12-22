import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { withDomain } from 'shared/helpers/withDomain'

import mockImg from '/public/assets/images/trip-planner/planner__category-bg.png'

import s from './CategoryCard.module.scss'

interface CategoryCardProps {
  id: number
  name: string
  images: string[]
  description: string
  vertical?: boolean
}
export const CategoryCard: FC<CategoryCardProps> = ({
  id,
  name,
  description,
  images,
  vertical = false,
}) => {
  return (
    <Link href={`travel_planner/${id}`}>
      <div className={cn(s.card, { [s.vertical]: vertical })}>
        <div className={s.image}>
          {images.length ? (
            <Image
              src={vertical ? withDomain(images[0]) : mockImg}
              layout={'fill'}
              alt={''}
            />
          ) : null}
        </div>
        <div className={s.content}>
          <div className={s.title}>{name}</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>
    </Link>
  )
}
