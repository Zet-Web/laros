import { FC } from 'react'
import s from './Highlighted.module.scss'
import cls from 'classnames'
import { HighlightedItem } from './HighlightedItem'
import { Highlighted as HighlightedType } from 'shared/types/staticTravel'

interface HighlightedProps {
  highlighted: HighlightedType[]
}

export const Highlighted: FC<HighlightedProps> = ({ highlighted }) => {
  return (
    <div className={cls(s.wrapper)}>
      <h3 className={s.title}>Highlighted trip proposals</h3>
      <div className={s.items}>
        {highlighted.map(item => (
          <HighlightedItem
            link={item.link}
            text={item.text}
            images={item.images}
          />
        ))}
      </div>
    </div>
  )
}
