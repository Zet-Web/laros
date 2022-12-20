import { FC } from 'react'
import Image, { ImageProps } from 'next/image'
import cn from 'classnames'

import { DownloadIcon } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

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
  const t = useTranslate()
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
        <div className={s.topic}>{t('brochures.brochuresLabel')}</div>
        <div className={s.name}>{name}</div>

        <a onClick={() => onDownload(id, file)} className={s.icon}>
          <DownloadIcon />
        </a>
      </div>

      <div onClick={() => onSelect(id)} className={selectClass}>
        {isSelected
          ? t('brochures.buttonSelected')
          : t('brochures.buttonSelect')}
      </div>
    </div>
  )
}
