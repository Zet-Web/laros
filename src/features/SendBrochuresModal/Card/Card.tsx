import Image from 'next/image'
import { FC } from 'react'
import { Brochure } from 'shared/types/brochures'
import s from './Card.module.scss'
interface CardProps {
  brochure: Brochure
}
export const Card: FC<CardProps> = ({ brochure }) => {
  if (!brochure) return null
  return (
    <div className={s.card}>
      <Image
        className={s.image}
        width={160}
        height={140}
        src={brochure?.image ?? ''}
      />
      <div className={s.content}>
        <div className={s.topic}>{brochure.topic}</div>
        <div className={s.name}>{brochure.name}</div>
      </div>
    </div>
  )
}
