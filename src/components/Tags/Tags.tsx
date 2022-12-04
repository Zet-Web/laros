import { FC } from 'react'
import cn from 'classnames'
import { Tag } from 'shared/types/tag'

import s from './Tags.module.scss'

interface TagsProps {
  tags: Tag[]
  onChange: (tags: Tag[]) => void
  value: number[]
}

export const Tags: FC<TagsProps> = ({ tags, onChange, value }) => {
  const handleChange = (id: Tag['id']) => {
    const changedTags = tags.map(tag => ({
      ...tag,
      isSelected: tag.id === id ? !tag.isSelected : tag.isSelected,
    }))
    onChange(changedTags)
  }

  return (
    <div className={s.tags}>
      <div className={s.label}>Tags:</div>
      {tags.length
        ? tags.map(({ id, name, isSelected = false }) => (
            <span
              key={id}
              className={cn(s.name, { [s.active]: isSelected })}
              onClick={() => handleChange(id)}
            >
              {name}
            </span>
          ))
        : null}
    </div>
  )
}
