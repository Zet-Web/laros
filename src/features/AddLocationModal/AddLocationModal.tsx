import { FC } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { Button, Modal } from 'components'

import s from './AddLocationModal.module.scss'
import { Destination } from 'shared/types/destinations'
import { useTranslate } from '../../shared/hooks/useTranslate'

interface AddLocationModalProps extends Destination {
  onClick: (id: number) => void
  isOpen: boolean
  onClose: () => void
}

export const AddLocationModal: FC<AddLocationModalProps> = ({
  isOpen,
  onClose,
  onClick,
  images,
  id,
  name,
  description,
}) => {
  const t = useTranslate()

  const pagination = {
    clickable: true,
    renderBullet: function (_: any, className: any) {
      return '<span class="' + className + '">' + ' ' + '</span>'
    },
  }
  if (!id) return null
  return (
    <Modal isOpen={isOpen} title={t('common.addLocation')} onClose={onClose}>
      <div className={s.content}>
        <div className={s.slider}>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              ...pagination,
              el: '.swiperPagination',
            }}
            navigation
            className={s.bannerSliderSwiper}
          >
            {images.map((image, id) => {
              return (
                <SwiperSlide
                  key={id}
                  className={s.bannerSliderSlide}
                  style={{
                    backgroundImage: `url(${
                      typeof image === 'string' ? image : image.src
                    })`,
                  }}
                />
              )
            })}
          </Swiper>
          <div className={cn(s.bannerSwiperPagination, 'swiperPagination')} />
        </div>
        <div className={s.bottom}>
          <div className={s.left}>
            <h2 className={s.title}>{name}</h2>
            <p className={s.description}>{description}</p>
            <span className={s.highlights}>
              {t('changingLocation.highlights')}:
            </span>
          </div>
          <div className={s.photos}>
            <div className={s.photosTitle}>{t('changingLocation.photos')}</div>

            <div className={s.photosSlider}>
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{
                  ...pagination,
                  el: '.photosSliderCustomPagination',
                }}
                className={s.photosSwiper}
              >
                {images.map((image, id) => {
                  return (
                    <SwiperSlide key={id}>
                      <div
                        className={s.photosSliderItem}
                        style={{
                          backgroundImage: `url(${
                            typeof image === 'string' ? image : image.src
                          })`,
                        }}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div
                className={cn(
                  s.photosSliderCustomPagination,
                  'photosSliderCustomPagination'
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.buttons}>
        <Button classname={s.saveButton} onClick={() => onClick(id)}>
          {t('changingLocation.save')}
        </Button>

        <Button variant='outline' onClick={onClose} classname={s.cancelButton}>
          {t('changingLocation.cancel')}
        </Button>
      </div>
    </Modal>
  )
}
