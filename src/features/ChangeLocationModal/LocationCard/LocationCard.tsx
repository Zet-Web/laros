import { FC, useState } from 'react'
import { Destination } from 'shared/types/destinations'
import s from './LocationCard.module.scss'
import cn from 'classnames'

interface LocationCardProps extends Destination {
  isSelected: boolean
  onCardClick: (id: number) => void
  onSelect: (id: number) => void
}
export const LocationCard: FC<LocationCardProps> = ({
  id,
  description,
  name,
  images,
  isSelected,
  onCardClick,
  onSelect,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{
        background: hover
          ? `linear-gradient(0deg, rgba(16, 30, 68, 0.9), rgba(16, 30, 68, 0.9)), url(${images[0]}), #FAFBFC`
          : images[0]
          ? `linear-gradient(360deg, #1B242D 0%, rgba(27, 36, 45, 0) 35.75%), url(${images[0]}), #FAFBFC`
          : '#d9d9d9',
      }}
      onClick={() => onSelect(id)}
      className={cn(s.card, { [s.selected]: isSelected })}
    >
      <div className={s.title}>{name}</div>
      <div className={s.description}>{description}</div>
      {!isSelected && (
        <div onClick={() => onCardClick(id)} className={s.btn}>
          Select
        </div>
      )}
      {isSelected && <div className={s.selectedBtn}>Selected</div>}
    </div>
  )
}
