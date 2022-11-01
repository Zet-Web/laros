import React, { FC } from 'react'
import cn from 'classnames'
import s from './SelectedType.module.scss'
import { Slider } from '../../../components/Slider'
import { SelectedTypeMock } from '../../../shared/mocks/selectedtype'
import { SliderItem } from './SliderItem'

export const SelectComponent: FC = () => {
  return (
    <div className={s.wrapper}>
      <Slider
        nextEl='moreNext'
        prevEl='morePrev'
        slidesPerView={5}
        withNavigation={true}
        withPagination={true}
        classname={s.sliderCuston}
      >
        {SelectedTypeMock.map((item, index) => (
          <SliderItem
            image={item.image}
            icon={item.icon}
            title={item.title}
            text={item.text}
            subtitle={item.subtitle}
            key={index}
          />
        ))}
      </Slider>
    </div>
  )
}
