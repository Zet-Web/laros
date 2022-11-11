import React, { FC } from 'react'
import s from './Explore.module.scss'
import Image from 'next/image'
import { ExploreImage } from '../../../shared/types/explore'

interface ExploreBlockProps {
  images: ExploreImage[]
}

export const Explore: FC<ExploreBlockProps> = ({ images }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h2 className={s.title}>Explore new places</h2>
        <p className={s.subtitle}>
          At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
          in orci, pretium nulla volutpat leo.
        </p>
      </div>
      <div className={s.images}>
        {images.map((item, idx) => (
          <div
            className={s.exploreItem}
            style={{ backgroundImage: `url(${item.image})` }}
            key={idx}
          >
            <span className={s.itemName}></span> {/* TODO temp */}
          </div>
        ))}
      </div>
    </div>
  )
}
