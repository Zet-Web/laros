import { FC, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import cn from 'classnames'

import { Button } from 'components'

import s from './Gallery.module.scss'

interface GalleryProps {
  images: string[] | StaticImageData[] | HTMLImageElement[]
  isOpen: number | null
  onClose: (value: number | null) => void
}

export const Gallery: FC<GalleryProps> = ({ images, isOpen = 0, onClose }) => {
  const swiperRef = useRef<HTMLDivElement>(null)
  const changeSlide = (slideId: number) => {
    // @ts-ignore
    swiperRef.current?.swiper.slideTo(slideId)
  }

  return isOpen !== null ? (
    <div
      className={cn(s.galleryModal, { [s.hidden]: !isOpen })}
      onClick={() => onClose(null)}
    >
      <div onClick={e => e.stopPropagation()}>
        <Swiper
          initialSlide={isOpen}
          // @ts-ignore
          ref={swiperRef}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={s.galleryModalSwiper}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={s.galleryModalSlide}>
                <Image
                  onClick={e => e.stopPropagation()}
                  className={s.image}
                  width={1062}
                  height={624}
                  src={item}
                />
                <Button
                  onClick={() => onClose(null)}
                  variant='outline'
                  type='button'
                  classname={s.exit}
                >
                  <Image
                    width={53}
                    height={53}
                    src='/assets/images/area-images/exit.svg'
                  />
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.sliderThumbs}>
        {images.map((item, id) => (
          <div
            key={id}
            className={s.sliderThumbItem}
            onClick={e => {
              e.stopPropagation()
              changeSlide(id)
            }}
          >
            <Image width={60} height={36} src={item} />
          </div>
        ))}
      </div>
    </div>
  ) : null
}
