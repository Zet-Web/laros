import { FC } from 'react'

import s from './InsiderTips.module.scss'

interface InsiderProps {
  data: string
}

export const InsiderTips: FC<InsiderProps> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  )
}
