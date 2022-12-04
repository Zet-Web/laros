import { FC, useEffect, useRef, useState } from 'react'
import s from './Slider.module.scss'
import cn from 'classnames'
import { ReactPlayer } from 'components'
import { SliderItem } from './SliderItem'
import Link from 'next/link'
import { Overview } from 'shared/types/staticTravel'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

interface SliderProps {
  className?: string
  cards: Overview[]
}

export const Slider: FC<SliderProps> = ({ className, cards }) => {
  const [initialSlide, setInitialSlide] = useState<number>(0)
  const swiperRef = useRef<any>(null)
  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(initialSlide)
  }, [initialSlide])

  return (
    <div className={cn(className, s.wrapper)}>
      <h1 className={s.title}>Luxury & Yachting Services</h1>
      <div className={s.sliderWrapper}>
        <div className={s.contentWrapper}>
          <h3 className={s.subtitle}>Overview</h3>
          <p className={s.text}>
            Orci, diam at urna tellus pellentesque. Lacus turpis pharetra id
            eget ullamcorper. Interdum risus, est, at viverra ullamcorper
            tortor, sagittis, ut et. Massa molestie vel odio nunc, facilisi. Eu,
            porttitor sagittis facilisis in iaculis molestie. Ultricies neque
            turpis ac non pharetra, enim, ornare.
          </p>
          <div className={s.slider}>
            <Swiper
              // @ts-ignore
              ref={swiperRef}
              slidesPerView={1}
              modules={[Navigation]}
              spaceBetween={50}
              navigation={{
                nextEl: '.nextEl',
                prevEl: '.prevEl',
              }}
            >
              {cards.map((card, id) => (
                <SwiperSlide onMouseEnter={() => setInitialSlide(id)} key={id}>
                  {!card.video ? (
                    <Image
                      width={1063}
                      height={400}
                      src={card.preview}
                      layout={'fill'}
                    />
                  ) : (
                    <div className={s.videoWrapper}>
                      <ReactPlayer
                        playing={initialSlide === id}
                        controls
                        width={770}
                        url={card.video}
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={s.sliderNavigation}>
              <div
                onClick={() => setInitialSlide(initialSlide - 1)}
                className={cn(s.prevEl, 'prevEl', 'swiper-button-prev')}
              ></div>
              <div
                onClick={() => setInitialSlide(initialSlide + 1)}
                className={cn(s.nextEl, 'nextEl', 'swiper-button-next')}
              ></div>
            </div>
          </div>
          <div className={s.sliderItems}>
            {cards.map((card, id) => (
              <SliderItem
                setInitialSlide={() => setInitialSlide(id)}
                active={initialSlide === id}
                image={card?.preview}
                isVideo={!!card.video}
                id={id}
                key={id}
              />
            ))}
          </div>
          <p className={s.text}>
            Justo, nulla sit egestas justo, faucibus consequat condimentum in.
            Nullam nam mi non eget nisi cursus eget. Nam at arcu, lectus ornare
            eu in. Faucibus duis in ac, interdum quam nisi ac bibendum cras. In
            quis ac eros, mauris etiam.
          </p>
          <p className={s.text}>
            Tristique risus, magna curabitur facilisis commodo. Fames arcu non
            dolor malesuada eget. Potenti metus ultricies bibendum aenean massa
            nunc egestas. Nisi nunc sit nibh arcu bibendum. Suspendisse sodales
            eu ac nam volutpat egestas. Tincidunt volutpat orci ultrices et
            venenatis commodo lacus auctor integer. Vel vitae amet lobortis
            malesuada. Dignissim ipsum sit ut a mattis tristique. Venenatis
            donec nibh quam risus tellus integer pellentesque gravida quis. Ac
            adipiscing consectetur maecenas placerat purus. Auctor lectus
            accumsan pharetra, egestas tellus odio nec sapien aliquet.
          </p>
          <div className={s.linkWrapper}>
            <Link href={'/#'}>See more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
