import React, { FC, useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import { BlogHeaderImage } from '../../components/Images/BlogHeaderImage'
import { Review, Slider } from 'features'
import { reviewsMock } from 'shared/mocks/reviews'
import { blogs } from 'shared/mocks/blogs'

import s from './BlogsPage.module.scss'
import { BlogSection } from '../../features/BlogSection'
import { ContactFooterHero } from '../../features/ContactFooterHero'

interface BlogItemProps {
  id: number
  title: string
  subTitle: string
  description: string
  image: string | StaticImageData
  reversed: boolean
}

export const BlogItem: FC<BlogItemProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  reversed,
}) => {
  return (
    <li className={s.blogItemWrapper}>
      <BlogSection
        title={title}
        subTitle={subTitle}
        description={description}
        image={image}
        id={id}
        haveButton
        reversed={reversed}
      />
    </li>
  )
}

export const BlogsPage: FC = () => {
  const [blogsData, setBlogsData] = useState<any[] | null>([])

  useEffect(() => {
    if (!blogsData?.length) {
      setBlogsData(blogs)
    }
  }, [blogsData])

  return (
    <>
      <div className={s.page}>
        <div className={s.pictures}>
          <BlogHeaderImage />
        </div>
        <ul className={s.blogs}>
          {blogsData?.length
            ? blogsData.map(blogData => (
                <BlogItem
                  key={blogData.id}
                  {...blogData}
                  reversed={blogData.id % 2 === 0}
                />
              ))
            : null}
        </ul>
        <div className={s.reviews}>
          <div className={s.title}>
            <h3>What people say about us</h3>
            <p className={s.descr}>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
          </div>
          <div className={s.sliderContainer}>
            <Slider
              slidesPerView={2}
              withPagination
              withNavigation
              nextEl='moreNext'
              prevEl='morePrev'
              classname={s.sliderCustom}
            >
              {reviewsMock.map(review => (
                <Review {...review} key={review.id} />
              ))}
            </Slider>
          </div>
        </div>
        <ContactFooterHero />
      </div>
    </>
  )
}
