import React, { FC } from 'react'
import s from './Comments.module.scss'
import { Slider } from 'components/Slider'

import { Review as ReviewType } from 'shared/types/review'
import { Review } from 'features'

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
        classname={s.sliderCuston}
        withPagination={true}
        withNavigation={true}
        slidesPerView={2}
        nextEl='moreNext'
        prevEl='morePrev'
      >
        {comments.comments.map((review, index) => (
          <Review
            withAvatar={false}
            key={review.id}
            id={review.id}
            className={'homePageItem'}
            name={review.name}
            tripname={review.tripname}
            avatar={review.avatar}
            images={review.images}
            text={review.text}
            withImages
          />
        ))}
      </Slider>
    </div>
  )
}
