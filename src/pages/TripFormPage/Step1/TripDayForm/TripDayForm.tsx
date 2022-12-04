import { Button, InfoIcon, Modal, PencilIcon, PinIcon } from 'components'
import { Counter } from 'components/Counter'
import { truncate } from 'lodash'
import Image from 'next/image'
import { FC, useState } from 'react'
import { TRUNCATED_TEXT_SIZE } from 'shared/constants'
import { getDayName } from 'shared/helpers/localize'
import { TransferType } from 'shared/types/car'
import { OrderForm, PeopleCapacity } from 'shared/types/order'
import s from './TripDayForm.module.scss'
import exchange from '/public/assets/images/exchange.svg?url'
import cn from 'classnames'
import { Room } from 'shared/types/hotel'
import { ChangeLocationModal } from 'features/ChangeLocationModal'
import { useModal } from 'shared/hooks/useModal'
import { ChangeAccomodationModal } from 'features/ChangeAccomodationModal'
import { getRooms } from 'shared/api/routes/rooms'
import { ChangeTransferModal } from 'features/ChangeTransferModal'
import { getNearDestinations } from 'shared/api/routes/destinations'
import { Destination } from 'shared/types/destinations'
import { FieldValues, UseFormSetValue } from 'react-hook-form'
import { ChangeHotelModal } from 'features/ChangeHotelModal'

interface TripDayFormProps {
  locationId: number
  total: number
  index: number
  hotel: { name: string; id: number }
  description: string
  duration: number
  location: string
  day: string
  type: TransferType
  to: string
  from: string
  rooms: Array<PeopleCapacity & Room>
  onChange: UseFormSetValue<FieldValues>
}
export const TripDayForm: FC<TripDayFormProps> = ({
  day,
  locationId,
  total,
  rooms,
  hotel,
  from,
  to,
  duration,
  location,
  type,
  description,
  index,
  onChange,
}) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const [hotelRooms, setHotelRooms] = useState<Room[]>([])
  const [nearLocations, setNearLocations] = useState<Destination[]>([]) // TODO can be moved to hook
  const locationModal = useModal()
  const accomodationModal = useModal()
  const transferModal = useModal()
  const hotelModal = useModal()

  const changeAccomodation = async () => {
    try {
      const rooms = await getRooms({ hotel: hotel.id })
      setHotelRooms(rooms.data.data)
      accomodationModal.open()
    } catch (error) {
      console.log(error)
    }
  }

  const changeLocation = async () => {
    try {
      const locations = await getNearDestinations(locationId)
      setNearLocations(locations.data.data)
      locationModal.open()
    } catch (error) {
      console.log(error)
    }
  }
  const changeTransfer = async () => {
    try {
      // const transfer = await
      // setNearLocations(transfer.data.data)
      transferModal.open()
    } catch (error) {
      console.log(error)
    }
  }

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
            {
              <Button onClick={() => changeTransfer()} classname={s.editBtn}>
                Edit
              </Button>
            }
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
          <Button onClick={() => changeLocation()} classname={s.editBtn}>
            Edit
          </Button>
        </div>
        <div className={s.section}>
          <div className={s.sectionTitle}>Duration of the location:</div>
          <div className={s.durationCounter}>
            {duration} {getDayName(duration)}{' '}
            <div className={s.counter}>
              <Counter
                min={1}
                value={duration}
                onChange={num =>
                  onChange(`destinations.${index}.duration`, num)
                }
              />
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
          <div
            className={s.sectionTitle}
          >{`Accommodation/\nbreakfast in:`}</div>
          <div className={cn(s.sectionValue, s.hotel)}>
            <span className={s.valueIcon}>
              <PinIcon />
            </span>{' '}
            <div className={s.valueName}>{hotel.name}</div>{' '}
            <span className={s.infoBtn}>
              <InfoIcon />
            </span>
          </div>
          <Button onClick={() => hotelModal.open()} classname={s.editBtn}>
            Edit
          </Button>
        </div>
        {rooms.map((room, index) => {
          return (
            <div key={index} className={s.section}>
              <div className={s.roomTitle}>Room {index + 1}</div>
              <div
                onClick={() => changeAccomodation()}
                className={cn(s.sectionValue, s.changeRoom)}
              >
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
      <ChangeTransferModal
        type={TransferType.RENTAL}
        onClick={() => {}}
        {...transferModal}
        cars={[]}
      />
      <ChangeAccomodationModal
        onSubmit={id => onChange(``, id)}
        hotel={hotel.name}
        {...accomodationModal}
        rooms={hotelRooms}
      />
      <ChangeLocationModal
        onSubmit={id => onChange(`destinations.${index}.destination`, id)}
        current={locationId}
        location={location}
        destinations={nearLocations}
        {...locationModal}
      />
      <Modal {...hotelModal}>
        <ChangeHotelModal
          onSubmit={id => onChange(`destinations.${index}.hotel`, id)}
          destination={165}
        />
      </Modal>
    </div>
  )
}
