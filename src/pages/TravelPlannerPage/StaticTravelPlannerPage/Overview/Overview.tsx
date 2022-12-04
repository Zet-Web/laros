import { FC } from 'react'
import s from './Overview.module.scss'
import { Slider } from './Slider'
import { Overview as OverviewType } from 'shared/types/staticTravel'

interface OverviewProps {
  overview: OverviewType[]
}

export const Overview: FC<OverviewProps> = ({ overview }) => {
  return (
    <div className={s.wrapper}>
      <Slider cards={overview} />
      <div className={s.grayBackground}></div>
      <div className={s.whiteBackground}></div>
    </div>
  )
}
