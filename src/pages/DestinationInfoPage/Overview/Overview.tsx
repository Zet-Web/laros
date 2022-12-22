import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { Gallery, SliderGalery } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './Overview.module.scss'
import {withDomain} from "../../../shared/helpers/withDomain";

interface Overview {
  images: string[] | StaticImageData[] | HTMLImageElement[]
  overview: string
}

export const Overview: FC<Overview> = ({ images, overview }) => {
  const t = useTranslate()
  const [openGallery, setOpenGallery] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenGallery(index)
  }

  return (
    <div className={s.overview}>
      <div className={s.title}>{t('areaPage.OverviewTitle')}</div>

      <div className={s.subTitle}>{overview}</div>

      <div className={s.overviewSlider}>
        {images?.length ? (
          <SliderGalery spaceBetween={8}>
            {images.map((image, index) => (
              <div
                key={index}
                className={s.image}
                onClick={() => handleOpen(index)}
              >
                <Image layout={'fill'} src={withDomain(image)} alt='' />
              </div>
            ))}
          </SliderGalery>
        ) : null}
      </div>

      <Gallery images={images} isOpen={openGallery} onClose={setOpenGallery} />
    </div>
  )
}
