import { Button, InfoIcon, PencilIcon, PinIcon } from 'components'
import { Counter } from 'components/Counter'
import { Input } from 'components/Input'
import { Select } from 'components/Select'
import { truncate } from 'lodash'
import Image from 'next/image'
import { FC, useState } from 'react'
import { TRUNCATED_TEXT_SIZE } from 'shared/constants'
import { getDayName } from 'shared/helpers/localize'
import { TransferType } from 'shared/types/car'
import { PeopleCapacity } from 'shared/types/order'
import s from './TripDayForm.module.scss'
import exchange from '/public/assets/images/exchange.svg?url'
import cn from 'classnames'
import { Room } from 'shared/types/hotel'

interface TripDayFormProps {
  total: number
  hotel: { name: string }
  description: string
  duration: number
  location: string
  day: number
  type: TransferType
  to: string
  from: string
  rooms: Array<PeopleCapacity & Room>
}
export const TripDayForm: FC<TripDayFormProps> = ({
  day,
  total,
  rooms,
  hotel,
  from,
  to,
  duration,
  location,
  type,
  description,
}) => {
  const [isTruncated, setIsTruncated] = useState(true)
  return (
    <div className={s.container}>
      <div className={s.transfer}>
        <div className={s.transferBlock}>
          <div className={s.transferIcon}>
            <Image src={exchange} width={24} height={28} />
          </div>
        </div>
        <div className={s.transferInfo}>
          <div className={s.transferTitle}>Transfer: </div>
          <div className={s.transferRoute}>
            {from} &gt; {to}
          </div>
          <div className={s.transferType}>
            <div className={s.transferTypeIcon}></div>
            <div className={s.transferValue}>{type}</div>
            {<Button classname={s.editBtn}>Edit</Button>}
          </div>
        </div>
      </div>
      <div className={s.content}>
        <span className={s.day}>Day {day}</span>
        <span className={s.dayTotal}>out of {total}</span>
        <div className={s.section}>
          <div className={s.sectionTitle}>Location:</div>
          <div className={s.sectionValue}>
            <span className={s.valueIcon}>
              <PinIcon />
            </span>{' '}
            <div className={s.valueName}>{location}</div>{' '}
          </div>
          <Button classname={s.editBtn}>Edit</Button>
        </div>
        <div className={s.section}>
          <div className={s.sectionTitle}>Duration of the location:</div>
          <div className={s.durationCounter}>
            {duration} {getDayName(duration)}{' '}
            <div className={s.counter}>
              <Counter value={duration} onChange={() => { }} />
            </div>{' '}
          </div>
        </div>
        <div className={cn(s.section, s.descriptionSection)}>
          <div className={cn(s.sectionTitle, s.descriptionTitle)}>
            Description:
          </div>
          <div className={s.description}>
            <div className={s.descriptionText}>
              {isTruncated
                ? truncate(description, { length: TRUNCATED_TEXT_SIZE })
                : description}
            </div>
            {isTruncated && description?.length > TRUNCATED_TEXT_SIZE && (
              <div onClick={() => setIsTruncated(false)} className={s.moreBtn}>
                More
              </div>
            )}
          </div>
        </div>
        <div className={s.section}>
          <div className={s.sectionTitle}>{`Accommodation\nbreakfast in:`}</div>
          <div className={cn(s.sectionValue, s.hotel)}>
            <span className={s.valueIcon}>
              <PinIcon />
            </span>{' '}
            <div className={s.valueName}>{hotel.name}</div>{' '}
            <span className={s.infoBtn}>
              <InfoIcon />
            </span>
          </div>
          <Button classname={s.editBtn}>Edit</Button>
        </div>
        {rooms.map((room, index) => {
          return (
            <div key={index} className={s.section}>
              <div className={s.roomTitle}>Room {index + 1}</div>
              <div className={s.sectionValue}>
                <PinIcon />{' '}
                <div className={s.valueName}>
                  {room.room_name}{' '}
                  <span className={s.pencil}>
                    <PencilIcon />
                  </span>{' '}
                </div>
              </div>
              <div className={s.roomCapacityTitle}>People in a room:</div>{' '}
              <div className={cn(s.sectionValue, s.roomCapacity)}>
                {room.capacity}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
