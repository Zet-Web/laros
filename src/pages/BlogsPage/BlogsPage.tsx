import React, { FC, useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'

import { Review, BlogSection, ContactFooterHero } from 'features'
import { Slider, BlogHeaderImage } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { reviewsMock } from 'shared/mocks/reviews'
import { blogs } from 'shared/mocks/blogs'

import s from './BlogsPage.module.scss'

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
  const t = useTranslate()

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
            <h3>{t('homepage.aboutUsTitle')}</h3>
            <p className={s.descr}>{t('homepage.aboutUsSubTitle')}</p>
          </div>
          <div className={s.sliderContainer}>
            <Slider
              slidesPerView={2}
              withPagination
              withNavigation
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
