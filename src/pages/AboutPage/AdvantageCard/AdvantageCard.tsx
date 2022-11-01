import { FC } from 'react'
import { aboutCardsProps } from 'shared/types/about'

import s from '../AboutPage.module.scss'

export const AdvantageCard: FC<aboutCardsProps> = ({ title, description }) => {
  return (
    <div className={s.card}>
      <h2 className={s.cardHeader}>{title}</h2>
      <div className={s.cardText}>{description}</div>
    </div>
  )
}
