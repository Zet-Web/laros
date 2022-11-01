import React, { FC, ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import s from './AboutSlider.module.scss'

interface AboutSliderProps {
  children: ReactNode[] | string[]
}

export const AboutSlider: FC<AboutSliderProps> = ({ children }) => {
  return (
    <div className={s.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={8}
        slidesPerView={1.5}
        centeredSlides={true}
        initialSlide={1}
        navigation={true}
        pagination={true}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            <div className={s.slide}>{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
