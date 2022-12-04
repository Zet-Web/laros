import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'

import quotes from '/public/assets/images/blogs/“.svg?url'
import userPic from '/public/assets/images/blogs/abstract-user-flat-4-_1_.svg'

import s from './Review.module.scss'

interface ReviewProps {
  id: number
  name: string
  tripname: string
  className?: string
  images?: StaticImageData[] | string[]
  avatar: StaticImageData | string
  text: string
  withAvatar?: boolean
  withImages?: boolean
}

export const Review: FC<ReviewProps> = ({
  avatar,
  id,
  name,
  tripname,
  className,
  text,
  images,
  withImages,
  withAvatar,
}) => {
  return (
    <div className={cn(s.review, className)}>
      <div className={cn(s.profile, !withAvatar && s.profileWithoutAvatar)}>
        {withAvatar && <Image src={avatar ? avatar : userPic} alt='avatar' />}
        <div className={s.name}>{name}</div>
        <div className={s.tripName}>{tripname}</div>
      </div>

      <div>
        <p className={s.comment}>{text}</p>
        <div className={s.images}>
          {images &&
            images.map((image, index) => (
              <Image alt='' key={index} width={120} height={120} src={image} />
            ))}
        </div>
      </div>

      <span className={s.icon}>
        <Image src={quotes} alt='quotes' width={50} height={50} />
      </span>
    </div>
  )
}
