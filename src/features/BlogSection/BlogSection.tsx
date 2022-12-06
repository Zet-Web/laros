import React, { FC } from 'react'
import s from './BlogSection.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../../components'
import { useRouter } from 'next/router'
import cn from 'classnames'

interface BlogSection {
  id?: number
  title: string
  subTitle: string
  read?: number
  description: string
  image: string | StaticImageData
  reversed?: boolean
  haveButton?: boolean
}

export const BlogSection: FC<BlogSection> = ({
  title,
  subTitle,
  read,
  description,
  image,
  haveButton,
  id,
  reversed,
}) => {
  const router = useRouter()

  return (
    <div className={cn(s.blog, reversed ? s.blogReversed : '')}>
      <div className={s.content}>
        <h2 className={s.mainTitle}>{title}</h2>
        <h3 className={s.subTitle}>{subTitle}</h3>
        {read && <div className={s.read}>{`${read} min read`}</div>}
        <p className={s.description}>{description}</p>
        {haveButton && (
          <Button
            variant='secondary'
            classname={s.button}
            onClick={() => router.push(`/blogs/${id}`)}
          >
            Learn more
          </Button>
        )}
      </div>
      <div className={s.image}>
        <Image src={image} height={519} width={519} alt='blogImage' />
      </div>
    </div>
  )
}
