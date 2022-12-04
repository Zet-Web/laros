import { FC } from 'react'

import { Slider } from 'components'
import { SliderItem } from './SliderItem'

import { TripCategory } from 'shared/types/trip'

import s from './SelectedType.module.scss'

interface SelectedType {
  travelTypes: TripCategory[]
}

export const SelectComponent: FC<SelectedType> = ({ travelTypes }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.selectType_title}>Or browse the selected type</h3>

      <Slider
        slidesPerView={5}
        withNavigation={true}
        withPagination={true}
        spaceBetween={25}
      >
        {travelTypes.map((item, index) => (
          <SliderItem {...item} />
        ))}
      </Slider>
    </div>
  )
}
