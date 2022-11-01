import { FC } from 'react'
import s from './InsiderTips.module.scss'
import Image, { StaticImageData } from 'next/image'

interface InsiderProps {
  title: string
  description: string
  images: StaticImageData[]
}

export const InsiderTips: FC<InsiderProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
      <div className={s.imageWrapper}>
        {images.map((item, idx) => {
          return (
            <Image
              key={idx}
              className={s.image}
              width={0}
              height={194}
              src={item}
            />
          )
        })}
      </div>
    </div>
  )
}
