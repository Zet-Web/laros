import { FC } from 'react'
import cn from 'classnames'
import { Tag } from 'shared/types/tag'

import s from './Tags.module.scss'

interface TagsProps {
  tags: Tag[]
  onChange: (tags: Tag[]) => void
}

export const Tags: FC<TagsProps> = ({ tags, onChange }) => {
  const handleChange = (id: Tag['id']) => {
    const changedTags = tags.map(tag => ({
      ...tag,
      isSelected: tag.id === id ? !tag.isSelected : tag.isSelected,
    }))
    onChange(changedTags)
  }

  return (
    <div className={s.tags}>
      <span className={s.label}>Tags:</span>
      {tags.length
        ? tags.map(({ id, name, isSelected }) => (
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
