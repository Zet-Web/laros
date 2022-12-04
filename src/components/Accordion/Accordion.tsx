import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './Accordion.module.scss'

interface AccordionProps {
  title: string
  content: ReactNode
  index: number
  activeIndex?: number
  classname?: string
  setActiveIndex: (index: number) => void
}

export const Accordion: FC<AccordionProps> = ({
  title,
  content,
  classname,
  setActiveIndex,
  index,
  activeIndex = 0,
}) => {
  const accordion = cn(s.accordion, classname)
  const buttonClass = cn(s.button, {
    [s.minus]: index === activeIndex,
  })

  return (
    <div className={accordion}>
      <div className={s.accordionTab} onClick={() => setActiveIndex(index)}>
        <div className={s.title}>{title}</div>
        <div className={buttonClass}>{!(activeIndex === index) && '+'}</div>
      </div>

      {activeIndex === index && <div className={s.content}>{content}</div>}
    </div>
  )
}
