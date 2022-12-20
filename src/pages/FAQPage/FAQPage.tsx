import { FC, useState } from 'react'

import { Accordion } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { faqData } from 'shared/mocks/faqData'

import s from './FAQPage.module.scss'

export const FAQPage: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const t = useTranslate()

  const handleSetActiveIndex = (index: number) => {
    index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
  }

  return (
    <div className={s.faqContent}>
      <h1 className={s.faqTitle}>{t('faq.title')}</h1>

      <div className={s.text}>{t('faq.description')}</div>

      <div className={s.accordeon}>
        <div className={s.accordeonWrapper}>
          {faqData.map(({ title, content }, i) => (
            <Accordion
              key={title}
              title={t(title)}
              content={t(content)}
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
