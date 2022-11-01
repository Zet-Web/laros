import { FC } from 'react'
import s from './Destinations.module.scss'
import Image, { StaticImageData } from 'next/image'

interface DestinationsImages {
  title: string
  img: StaticImageData
}

interface DestinationsProps {
  title: string
  description: string
  images: DestinationsImages[]
}

export const Destinations: FC<DestinationsProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
      <div className={s.imagesWrapper}>
        {images.map((item, idx) => {
          return (
            <div className={s.images} key={idx}>
              <Image
                className={s.image}
                src={item.img}
                width={0}
                height={200}
                alt=''
              />
              <p className={s.imageTitle}>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
