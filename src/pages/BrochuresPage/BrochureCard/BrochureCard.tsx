import { FC } from 'react'
import Image, { ImageProps } from 'next/image'
import cn from 'classnames'

import { DownloadIcon } from 'components'

import s from './BrochureCard.module.scss'

interface BrochureCardProps {
  readonly id: number
  image: ImageProps['src']
  name: string
  topic: string
  file: string // TODO check
  isSelected?: boolean
  onSelect: (id: number) => void
  onDownload: (id: number, file: string) => void
}

export const BrochureCard: FC<BrochureCardProps> = ({
  id,
  name,
  image,
  topic,
  file,
  isSelected = false,
  onSelect,
  onDownload,
}) => {
  const selectClass = cn(s.select, {
    [s.selected]: isSelected,
  })

  return (
    <div className={cn(s.card, { [s.selectedCard]: isSelected })}>
      {image ? (
        <div className={s.cardImage}>
          <Image alt={s.image} src={image} layout={'fill'} />
        </div>
      ) : (
        <div className={s.placeholder}> </div>
      )}

      <div className={s.content}>
        <div className={s.topic}>{topic}</div>
        <div className={s.name}>{name}</div>

        <a onClick={() => onDownload(id, file)} className={s.icon}>
          <DownloadIcon />
        </a>
      </div>

      <div onClick={() => onSelect(id)} className={selectClass}>
        {isSelected ? 'Selected' : 'Select'}
      </div>
    </div>
  )
}
