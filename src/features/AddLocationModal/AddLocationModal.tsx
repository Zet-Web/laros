import { FC } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { Button, Modal } from 'components'

import s from './AddLocationModal.module.scss'
import { Destination } from 'shared/types/destinations'



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
  description
}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_: any, className: any) {
      return '<span class="' + className + '">' + ' ' + '</span>'
    },
  }
  return (
    <Modal isOpen={isOpen} title='Adding location' onClose={onClose}>
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
                    // @ts-ignore
                    backgroundImage: `url(${image.src})` }}
                ></SwiperSlide>
              )
            })}ё
          </Swiper>
          <div
            className={cn(s.bannerSwiperPagination, 'swiperPagination')}
          ></div>
        </div>
        <div className={s.bottom}>
          <div className={s.left}>
            <h2 className={s.title}>{name}</h2>
            <p className={s.description}>{description}</p>
            <span className={s.highlights}>Highlights:</span>
          </div>
          <div className={s.photos}>
            <div className={s.photosTitle}>Photos</div>

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
                        style={{ backgroundImage: `url(${image.src})` }}
                      ></div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div
                className={cn(
                  s.photosSliderCustomPagination,
                  'photosSliderCustomPagination'
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.buttons}>
        <Button classname={s.saveButton} onClick={() => onClick(id)}>
          Save changes
        </Button>

        <Button variant='outline' onClick={onClose} classname={s.cancelButton}>
          Cancel
        </Button>

      </div>
    </Modal>
  )
}
