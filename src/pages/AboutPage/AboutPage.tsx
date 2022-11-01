import React, { FC } from 'react'

import Image from 'next/image'
import slideImg1 from '/public/assets/images/about/house_orange.jpg'
import slideImg2 from '/public/assets/images/about/house_yellow.jpg'

import { AdvantageCard } from './AdvantageCard'

import s from './AboutPage.module.scss'
import { AboutSlider } from './AboutSlider/AboutSlider'
import { aboutCards } from 'shared/mocks/aboutCards'

export const AboutPage: FC = () => {
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
      <div className={s.sliderWrapper}>
        <AboutSlider>
          <Image src={slideImg1} width='850px' height='500px' alt='Image' />
          <Image src={slideImg2} width='850px' height='500px' alt='Image' />
          <Image src={slideImg1} width='850px' height='500px' alt='Image' />
          <Image src={slideImg2} width='850px' height='500px' alt='Image' />
        </AboutSlider>
      </div>
      <div className={s.wrapper}>
        <div className={s.textJustify}>
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
      </div>
    </>
  )
}
