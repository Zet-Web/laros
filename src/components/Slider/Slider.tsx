import { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { A11y, Navigation, Pagination } from 'swiper'

import s from './Slider.module.scss'

interface SliderProps {
  children: ReactNode[] | []
  slidesPerView?: number
  withNavigation?: boolean
  withPagination?: boolean
  nextEl?: string
  prevEl?: string
  classname?: string
  spaceBetween?: number
}

export const Slider: FC<SliderProps> = ({
  children,
  slidesPerView = 3,
  withNavigation = false,
  withPagination = false,
  spaceBetween = 50,
  nextEl = 'moreNext',
  prevEl = 'morePrev',
  classname,
}) => {
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {
    nextEl: `.${nextEl}`,
    prevEl: `.${prevEl}`,
  }

  return (
    <div className={cn(s.slider, classname)}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigationOptions || false}
        pagination={paginationOptions}
      >
        {children.length
          ? children.map((child, idx) => (
              <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))
          : null}
      </Swiper>
      {withNavigation && (
        <>
          <div
            className={cn(s.swiperButtonPrev, prevEl, 'swiper-button-prev')}
          ></div>
          <div
            className={cn(s.swiperButtonNext, nextEl, 'swiper-button-next')}
          ></div>
        </>
      )}
    </div>
  )
}
