import { FC } from 'react'

import { Button } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './JobCard.module.scss'

export interface jobCardProps {
  vacancy: string
  time: string
  description: string
  id: number
  onClick?: (id: number) => void
}

export const JobCard: FC<jobCardProps> = ({
  vacancy,
  time,
  id,
  onClick,
  description,
}) => {
  const t = useTranslate()

  return (
    <div className={s.cardWrapper}>
      <h2 className={s.title}>{vacancy}</h2>

      <div className={s.time}>{time}</div>

      <div dangerouslySetInnerHTML={{ __html: description }} />

      <div className={s.buttons}>
        <Button
          onClick={() => (onClick ? onClick(id) : null)}
          classname={s.applyButton}
        >
          {t('career.modalTitle')}
        </Button>

        <Button classname={s.infoButton} variant={'outline'}>
          {t('career.moreInfo')}
        </Button>
      </div>
    </div>
  )
}
