import { FC, useState } from 'react'
import s from './FAQPage.module.scss'

import { faqData } from '../../shared/mocks/faqData'
import { Accordeon } from 'components/Accordeon'

export const FAQPage: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleSetActiveIndex = (index: number) => {
    index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
  }

  return (
    <div className={s.faqContent}>
      <h1 className={s.faqTitle}>What users think about us</h1>
      <div className={s.text}>
        <p>
          Sapien ornare urna urna in facilisis viverra integer. Mi ornare mauris
          in duis in sit diam porttitor a. Congue pulvinar et vitae urna mi
          tristique laoreet integer molestie. Viverra sit sit sapien id blandit.
        </p>
      </div>
      <div className={s.accordeon}>
        <div className={s.accordeonWrapper}>
          {faqData.map(({ title, content }, i) => (
            <Accordeon
              key={title}
              title={title}
              content={content}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={handleSetActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
