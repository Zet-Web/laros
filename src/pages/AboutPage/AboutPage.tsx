import { FC, useState } from 'react'
import Image from 'next/image'

import { Gallery, SliderGalery } from 'components'
import { AdvantageCard } from './AdvantageCard'

import { aboutCards } from 'shared/mocks/aboutCards'

import slideImg1 from '/public/assets/images/about/house_orange.jpg'
import slideImg2 from '/public/assets/images/about/house_yellow.jpg'

import s from './AboutPage.module.scss'

export const AboutPage: FC = () => {
  const images = [slideImg1, slideImg2, slideImg1, slideImg2]
  const [openGallery, setOpenGallery] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenGallery(index)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.text}>
          <h1 className={s.title}>Who we are</h1>
          <p className={s.desc}>
            Mollis etiam in pretium nibh leo laoreet est, augue. Blandit tellus
            quam a donec habitasse vitae. Id enim, augue ipsum integer fames
            ipsum quis. Suspendisse lacus vel, sit parturient id magnis aenean
            at elit. Consectetur netus nisi, dolor, ut feugiat eget mi elit.
            Vulputate eleifend sed molestie cras at etiam ultricies lacus.
            Mollis etiam in pretium nibh leo laoreet est, augue. Blandit tellus
            quam a donec habitasse vitae. Id enim, augue ipsum integer fames
            ipsum quis. Suspendisse lacus vel, sit parturient id magnis aenean
            at elit. Consectetur netus nisi, dolor, ut feugiat eget mi elit.
            Vulputate eleifend sed molestie cras at etiam ultricies lacus.
            Blandit tellus quam a donec habitasse vitae. Id enim, augue ipsum
            integer fames ipsum quis. Suspendisse lacus vel, sit parturient id
            magnis aenean at elit. Consectetur netus nisi, dolor, ut feugiat
            eget mi elit. Vulputate eleifend sed molestie cras at etiam
            ultricies lacus.
          </p>
        </div>
        <div className={s.cards}>
          {aboutCards.map((card, i) => (
            <AdvantageCard
              key={i}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <SliderGalery>
        {images.map((item, index) => (
          <div
            className={s.galleryImage}
            key={index}
            onClick={() => handleOpen(index)}
          >
            <Image src={item} layout={'fill'} alt='Image' />
          </div>
        ))}
      </SliderGalery>

      <Gallery images={images} isOpen={openGallery} onClose={setOpenGallery} />

      <div className={s.wrapper}>
        <div className={s.textJustify}>
          <p className={s.subDesc}>
            Mollis etiam in pretium nibh leo laoreet est, augue. Blandit tellus
            quam a donec habitasse vitae. Id enim, augue ipsum integer fames
            ipsum quis. Suspendisse lacus vel, sit parturient id magnis aenean
            at elit. Consectetur netus nisi, dolor, ut feugiat eget mi elit.
            Vulputate eleifend sed molestie cras at etiam ultricies lacus.
            Mollis etiam in pretium nibh leo laoreet est, augue. Blandit tellus
            quam a donec habitasse vitae. Id enim, augue ipsum integer fames
            ipsum quis. Suspendisse lacus vel, sit parturient id magnis aenean
            at elit. Consectetur netus nisi, dolor, ut feugiat eget mi elit.
            Vulputate eleifend sed molestie cras at etiam ultricies lacus.
            Blandit tellus quam a donec habitasse vitae. Id enim, augue ipsum
            integer fames ipsum quis. Suspendisse lacus vel, sit parturient id
            magnis aenean at elit. Consectetur netus nisi, dolor, ut feugiat
            eget mi elit. Vulputate eleifend sed molestie cras at etiam
            ultricies lacus.
          </p>
        </div>
      </div>
    </>
  )
}
