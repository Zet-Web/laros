import { FC, useEffect, useState } from 'react'

import { Slider } from 'components'
import { SliderItem } from './SliderItem'

import { useTranslate } from 'shared/hooks/useTranslate'

import { TripCategory } from 'shared/types/trip'

import s from './SelectedType.module.scss'

interface SelectedType {
  travelTypes: TripCategory[]
}

export const SelectComponent: FC<SelectedType> = ({ travelTypes }) => {
  const t = useTranslate()
  const [windowWidth, setWindowWidth] = useState<number>()
  useEffect(() => {
    setWindowWidth(+window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(+window.innerWidth))
  }, [])
  return (
    <div className={s.wrapper}>
      <h3 className={s.selectType_title}>{t('homepage.selectTypeTitle')}</h3>

      <Slider
        slidesPerView={+!!windowWidth <= 1400 ? 4 : 5}
        withNavigation={true}
        withPagination={true}
        spaceBetween={25}
      >
        {travelTypes.map((item, index) => (
          <SliderItem key={index} {...item} />
        ))}
      </Slider>
    </div>
  )
}
