import React, { FC } from 'react'
import Link from 'next/link'

import { HotelGallery } from 'shared/types/hotelPage'

import s from './Gallery.module.scss'

interface GalleryProps {
  gallery: HotelGallery[]
}

export const Gallery: FC<GalleryProps> = ({ gallery }) => {
  return (
    <div className={s.Gallery}>
      <div className={s.GalleryTitle}>Nearby destinations</div>

      <div className={s.GallerySubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.GalleryWrap}>
        {gallery.length ? (
          <>
            {gallery.map((item, index) => {
              return (
                <Link key={index} href={`/destinations/${item.id}`}>
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className={s.GalleryItem}
                  >
                    <div className={s.GalleryItemDescription}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </>
        ) : null}
      </div>
    </div>
  )
}
