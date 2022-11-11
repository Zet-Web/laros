import React, { FC, useState } from 'react'
import Image from 'next/image'
import { truncate } from 'lodash'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { Button } from 'components'
import { InfoTags } from 'features/InfoTags/InfoTags'
import { Input } from 'components/Input'
import { InputCalendar } from 'components/InputCalendar'

import trash from '../../../../public/assets/images/Trash.svg'
import add from '../../../../public/assets/images/plus.svg'

import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from 'shared/constants'
import { Hotel } from 'shared/types/hotel'

import s from './HotelIntro.module.scss'

export const HotelIntro: FC<Hotel> = ({
  description,
  opinion,
  rating,
  destination,
  name,
  tags,
  is_active,
  link,
  location,
  max_capacity,
  period,
  tripadvisor_id,
  address,
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)

  return (
    <div className={s.HotelIntro}>
      <div className={s.HotelIntroLeft}>
        {/*============================================================================================== Rating*/}
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor='#ffd700'
          edit={false}
        />
        {/*============================================================================================ Address*/}
        <div className={s.HotelIntroAddress}>{address}</div>

        {/*========================================================================================= Hotel Name*/}
        <div className={s.HotelIntroName}>{name}</div>

        {/*================================================================================== hotel Description*/}
        <div className={s.HotelIntroDescription}>
          {isTruncated
            ? truncate(description, { length: TRUNCATED_ROOM_CARD_TEXT_SIZE })
            : description}
        </div>
        {description && (
          <div
            className={s.HotelIntroSeeMore}
            onClick={() => setIsTruncated(prev => !prev)}
          >
            See more
          </div>
        )}

        <InputCalendar label={'Your travel period'} />

        <div className={s.HotelIntroOptionWrap}>
          <div className={s.HotelIntroOptionTitle}>Room 1</div>
          <Image src={trash} alt='' />
        </div>

        <div className={s.NumberInputWrap}>
          <Input
            type={'number'}
            placeholder={'Adults'}
            onChange={() => { }}
            withCounter={true}
            label={'1'}
            classname={s.HotelIntroNumberInput}
          />
          <Input
            type={'number'}
            onChange={() => { }}
            placeholder={'Children (2-12 years old):'}
            withCounter={true}
            label={'1'}
            classname={s.HotelIntroNumberInput}
          />
        </div>

        <div className={s.HotelIntroAddRoom}>
          <span>
            <Image src={add} alt='' />
          </span>
          <div className={s.HotelIntroOptionTitle}>Add room</div>
        </div>

        <Button>Start trip planning</Button>
      </div>

      <div className={s.HotelIntroRight}>
        <div className={s.Map}>
          <Image src={location} width={542} height={425} alt='' />
        </div>

        <div className={s.TagsPanel}>
          {tags.length ? (
            <>
              <div className={s.TagsTitle}>Highlights:</div>
              <InfoTags tags={tags} limit={4} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
