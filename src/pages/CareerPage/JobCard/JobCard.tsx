import { Button } from 'components/Button'
import { FC } from 'react'
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
  return (
    <div className={s.cardWrapper}>
      <h2 className={s.title}>{vacancy}</h2>
      <div className={s.time}>{time}</div>
      <p className={s.description}>{description}</p>
      <div className={s.buttons}>
        <Button
          onClick={() => (onClick ? onClick(id) : null)}
          classname={s.applyButton}
        >
          Apply for a job
        </Button>
        <Button classname={s.infoButton} variant={'outline'}>
          More info
        </Button>
      </div>
    </div>
  )
}
