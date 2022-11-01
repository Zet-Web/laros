import { ReactNode } from 'react'
import cn from 'classnames'

import s from './Accordeon.module.scss'

interface AccordeonProps {
  title: string
  content: ReactNode
  index: number
  activeIndex?: number
  classname?: string
  setActiveIndex: (index: number) => void
}

export const Accordeon: React.FC<AccordeonProps> = ({
  title,
  content,
  classname,
  setActiveIndex,
  index,
  activeIndex = 0,
}) => {
  const accordeonTab = cn(s.accordeonTab, classname)
  const buttonClass = cn(s.accordeonItemButton, {
    [s.minus]: index === activeIndex,
  })

  return (
    <div className={accordeonTab}>
      <div className={s.accordeonItem} onClick={() => setActiveIndex(index)}>
        <div className={s.accordeonItemTitle}>{title}</div>
        <div className={buttonClass}>{!(activeIndex === index) && '+'}</div>
      </div>

      {activeIndex === index && (
        <div className={s.accordeonItemContent}>{content}</div>
      )}
    </div>
  )
}
