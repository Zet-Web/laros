import React, { FC, useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { Button } from 'components'
import { BlogHeaderImage } from '../../components/Images/BlogHeaderImage'
import { Review } from 'features'
import { reviewsMock } from 'shared/mocks/reviews'
import { blogs } from 'shared/mocks/blogs'

import s from './BlogsPage.module.scss'

interface BlogItemProps {
  id: number
  title: string
  subTitle: string
  description: string
  image: ImageProps['src']
}

export const BlogItem: FC<BlogItemProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
}) => {
  return (
    <li className={s.blog}>
      <div className={s.content}>
        <h2 className={s.mainTitle}>{title}</h2>
        <h3 className={s.subTitle}>{subTitle}</h3>
        <p className={s.description}>{description}</p>
        <Link href={`blogs/${id}`} onClick={() => {}}>
          <a href='' className={s.button}>
            Learn more
          </a>
        </Link>
      </div>
      <div className={s.image}>
        <div className={s.block} />
        <Image src={image} height={520} width={520} alt='blogImage' />
      </div>
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
                <BlogItem key={blogData.id} {...blogData} />
              ))
            : null}
        </ul>
        <div className={s.reviews}>
          <div className={s.title}>
            <h3>What people say about us</h3>
            <p>
              At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque
              gravida in orci, pretium nulla volutpat leo.
            </p>
          </div>
          <div className={s.review}>
            {reviewsMock.map(review => (
              <Review {...review} key={review.id} />
            ))}
          </div>
        </div>
        <div className={s.contact}>
          <Button variant='secondary' classname={s.button}>
            Contact
          </Button>
        </div>
      </div>
    </>
  )
}
