import { Review, Slider } from 'features'

import { reviewsMock } from 'shared/mocks/reviews'

import s from './TestimonialsPage.module.scss'

export const TestimonialsPage = () => {
  return (
    <div className={s.page}>
      <h1 className={s.title}>What users think about us</h1>
      <p className={s.description}>
        Mollis etiam in pretium nibh leo laoreet est, augue. Blandit tellus quam
        a donec habitasse vitae. Id enim, augue ipsum integer fames ipsum quis.
        Suspendisse <br /> lacus vel, sit parturient id magnis aenean at elit.
        Consectetur netus nisi, dolor, ut feugiat eget mi elit. Vulputate
        eleifend sed molestie cras at etiam ultricies lacus.
      </p>
      <Slider>
        {reviewsMock.map((review, index) => (
          <Review
            key={review.id}
            id={review.id}
            className={index % 2 === 0 ? s.reviewRaised : undefined}
            name={review.name}
            tripname={review.tripname}
            avatar={review.avatar}
            images={review.images}
            text={review.text}
            withImages={false}
            withAvatar={false}
          />
        ))}
      </Slider>
    </div>
  )
}
