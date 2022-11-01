import React, { FC } from 'react'

import { Tag, TagProps } from 'components/Tag/Tag'

import s from './InfoTags.module.scss'

export interface InfoTagsProps {
  tags: TagProps[]
  limit?: number
}

export const InfoTags: FC<InfoTagsProps> = ({ tags, limit = 5 }) => {
  return (
    <div className={s.InfoTags}>
      {tags.length ? (
        <>
          {tags.slice(0, limit).map(tag => (
            <Tag key={tag.id} {...tag} />
          ))}

          {tags.length > limit ? (
            <span className={s.InfoTagsMoreTags}>+{tags.length - limit}</span>
          ) : null }
        </>
      ) : null }
    </div>
  )
}
