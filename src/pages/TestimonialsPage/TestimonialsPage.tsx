import { Review } from 'features'
import { Slider } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { reviewsMock } from 'shared/mocks/reviews'

import s from './TestimonialsPage.module.scss'

export const TestimonialsPage = () => {
  const t = useTranslate()

  return (
    <div className={s.page}>
      <h1 className={s.title}>{t('testimonials.title')}</h1>
      <p className={s.description}>{t('testimonials.description')}</p>

      <Slider
        slidesPerView={3}
        spaceBetween={25}
        withNavigation={true}
        withPagination={true}
        classname={s.slider}
      >
        {reviewsMock.map(review => (
          <Review
            key={review.id}
            withImages={false}
            withAvatar={false}
            {...review}
          />
        ))}
      </Slider>
    </div>
  )
}
