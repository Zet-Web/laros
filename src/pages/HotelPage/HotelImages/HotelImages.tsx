import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { Gallery, SliderGalery } from 'components'

import { withDomain } from 'shared/helpers/withDomain'

import s from './HotelImages.module.scss'

interface HotelImagesProps {
  images: string[] | StaticImageData[] | HTMLImageElement[]
}

export const HotelImages: FC<HotelImagesProps> = ({ images }) => {
  const [openGallery, setOpenGallery] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenGallery(index)
  }

  return (
    <div className={s.hotelImages}>
      {images?.length ? (
        <SliderGalery>
          {images.map((image, index) => (
            <div
              key={index}
              className={s.hotelImage}
              onClick={() => handleOpen(index)}
            >
              <Image layout={'fill'} src={withDomain(image)} alt='' />
            </div>
          ))}
        </SliderGalery>
      ) : null}
      <Gallery images={images} isOpen={openGallery} onClose={setOpenGallery} />
    </div>
  )
}
