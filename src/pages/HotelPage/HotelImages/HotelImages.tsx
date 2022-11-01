import React, { FC } from 'react'
import Image from 'next/image'

import { AboutSlider } from '../../AboutPage/AboutSlider/AboutSlider'

import s from './HotelImages.module.scss'

interface HotelImagesProps {
  images: string[] | null
}

export const HotelImages: FC<HotelImagesProps> = ({ images }) => {
  return (
    <div className={s.HotelImages}>
      {images?.length ? (
        <AboutSlider>
          {images.map((image, index) => (
            <div key={index} className={s.hotelImage}>
              <Image width={'1000'} height={'500'} src={image} alt='' />
            </div>
          ))}
        </AboutSlider>
      ) : null}
    </div>
  )
}
