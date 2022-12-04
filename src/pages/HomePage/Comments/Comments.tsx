import { FC } from 'react'

import { Slider } from 'components'
import { Review } from 'features'

import { Review as ReviewType } from 'shared/types/review'

import s from './Comments.module.scss'

interface CommentsBlockProps {
  comments: ReviewType[]
}

export const Comments: FC<CommentsBlockProps> = comments => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>What people say about us</h3>

      <p className={s.subtitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </p>

      <Slider
        withPagination={true}
        withNavigation={true}
        slidesPerView={2}
        nextEl={s.buttonNext}
        prevEl={s.buttonPrev}
      >
        {comments?.comments.map(review => (
          <Review key={review.id} withAvatar={false} withImages {...review} />
        ))}
      </Slider>
    </div>
  )
}
