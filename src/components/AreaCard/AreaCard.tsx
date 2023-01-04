import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import { withDomain } from 'shared/helpers/withDomain'

import s from './AreaCard.module.scss'

interface AreaCardProps {
  image: string | StaticImageData | HTMLImageElement
  name: string | null
  id: number
  onClick?: (id: number) => void
}

export const AreaCard: FC<AreaCardProps> = ({ image, onClick, id, name }) => {
  const handleClick = () => {
    onClick?.(id)
  }

  return (
    <div
      onClick={handleClick}
      className={s.image}
      style={{
        backgroundImage: `url(${image ? withDomain(image) : ''})`,
      }}
    >
      <div className={s.shadow}>{''}</div>
      <span className={s.name}>{name}</span>
    </div>
  )
}
