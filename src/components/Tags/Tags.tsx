import { FC } from 'react'
import cn from 'classnames'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Tag } from 'shared/types/tag'

import s from './Tags.module.scss'

interface TagsProps {
  tags: Tag[]
  onChange: (tags: Tag[]) => void
  value: Tag[] | undefined
}

export const Tags: FC<TagsProps> = ({ tags, onChange, value }) => {
  const t = useTranslate()

  const handleChange = (id: Tag['id']) => {
    const changedTags = (value ? value : tags).map(tag => ({
      ...tag,
      isSelected: tag.id === id ? !tag.isSelected : tag.isSelected,
    }))
    onChange(changedTags)
  }

  return (
    <div className={s.tags}>
      <div className={s.label}>{t('travelPlannerCategory.tags')}:</div>
      <div className={cn(s.tabs, ['scrollStyle'])}>
        {(value ? value : tags).map(({ id, name, isSelected }) => (
          <div
            key={id}
            className={cn(s.name, { [s.active]: isSelected })}
            onClick={() => handleChange(id)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
