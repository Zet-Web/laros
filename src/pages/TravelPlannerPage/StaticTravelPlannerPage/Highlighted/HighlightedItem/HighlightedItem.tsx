import { FC, useEffect, useRef, useState } from 'react'
import s from './HighlightedItem.module.scss'
import cls from 'classnames'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { Pagination } from 'swiper'

interface HighlightedItemProps {
  text: string
  link: string
  images: string[] | StaticImageData[]
}

export const HighlightedItem: FC<HighlightedItemProps> = ({
  images,
  link,
  text,
}) => {
  const [initialSlide, setInitialSlide] = useState<number>(0)
  const sliderRef = useRef<any>(null)

  useEffect(() => {
    sliderRef?.current?.swiper.slideTo(initialSlide)
  }, [initialSlide])

  return (
    <div className={cls(s.wrapper)}>
      <div className={s.sliderWrapper}>
        <Swiper
          // @ts-ignore
          ref={sliderRef}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {images.map((image, id: number) => (
            <SwiperSlide onMouseEnter={() => setInitialSlide(id)} key={id}>
              <Image height={203} width={510} layout={'fixed'} src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.pagination}>
          <div
            onClick={() => setInitialSlide(0)}
            className={cls(s.paginationItem, {
              [s.activePagination]: initialSlide === 0,
            })}
          ></div>
          <div
            onClick={() => setInitialSlide(1)}
            className={cls(s.paginationItem, {
              [s.activePagination]: initialSlide === 1,
            })}
          ></div>
          <div
            onClick={() => setInitialSlide(2)}
            className={cls(s.paginationItem, {
              [s.activePagination]: initialSlide === 2,
            })}
          ></div>
        </div>
      </div>
      <p className={s.text}>{text}</p>
      <div className={s.linkWrapper}>
        <Link href={'/#'}>See more</Link>
      </div>
    </div>
  )
}
