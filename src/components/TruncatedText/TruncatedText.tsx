import React, { FC, useState } from 'react'
import cn from 'classnames'
import { truncate } from 'lodash'

import { TRUNCATION_LIMIT_DEFAULT } from 'shared/constants'

import s from './truncatedText.module.scss'

interface TruncatedTextProps {
  children: string | null
  limit?: number
  className?: string
  more?: string
}
export const TruncatedText: FC<TruncatedTextProps> = ({
  children,
  limit = TRUNCATION_LIMIT_DEFAULT,
  className,
  more = 'See more',
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)

  return (
    <div className={cn(s.truncatedText, className)}>
      <div className={s.description}>
        {isTruncated && children
          ? truncate(children, { length: limit })
          : children}
      </div>

      {children && (
        <div
          className={s.seeMore}
          onClick={() => setIsTruncated(prev => !prev)}
        >
          {more}
        </div>
      )}
    </div>
  )
}
