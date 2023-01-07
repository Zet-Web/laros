import { FC, useEffect, useState } from 'react'
import { truncate } from 'lodash'
import cn from 'classnames'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

import {
  Button,
  Counter,
  InfoIcon,
  Modal,
  PencilIcon,
  PinIcon,
  TrashIcon,
} from 'components'
import {
  ChangeLocationModal,
  ChangeAccomodationModal,
  ChangeHotelModal,
} from 'features'
import { Transfer } from '../Transfer'
import RegionCard from 'components/RegionCard/RegionCard'

import { getDayName } from 'shared/helpers/localize'
import { useModal } from 'shared/hooks/useModal'
import { getRooms } from 'shared/api/routes/rooms'
import { findRooms } from 'shared/helpers/trip'
import { getNearDestinations } from 'shared/api/routes/destinations'
import { getTripDayByDestination } from 'shared/api/routes/order'
import { useTranslate } from 'shared/hooks/useTranslate'

import { TRUNCATED_TEXT_SIZE } from 'shared/constants'
import { Hotel, Room } from 'shared/types/hotel'
import { CarTransferType } from 'shared/types/car'
import { OrderForm, PeopleCapacity } from 'shared/types/order'
import { TripDestination } from 'shared/types/trip'
import { Destination } from 'shared/types/destinations'
import { TransferOptions } from 'shared/types/transport'

import s from './TripDayForm.module.scss'
import { getHotel } from 'shared/api/routes/hotels'
import { Option } from 'shared/types'

interface TripDayFormProps {
  form: OrderForm
  total: number
  index: number
  hotel: Hotel
  description: string
  duration: number
  destination: TripDestination
  day: string
  type: CarTransferType
  from?: Option
  capacity: PeopleCapacity[]
  previousDestination: TripDestination | null
  transfers: TransferOptions[]
  onChange: UseFormSetValue<FieldValues>
  onDelete?: (index: number) => void
}
export const TripDayForm: FC<TripDayFormProps> = ({
  form,
  day,
  total,
  hotel,
  from,
  duration,
  destination,
  type,
  capacity,
  description,
  index,
  previousDestination,
  transfers,
  onChange,
  onDelete,
}) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const [hotelRooms, setHotelRooms] = useState<Room[]>([])
  const [clientRooms, setClientRooms] = useState<Room[]>([])
  const [nearDestinations, setNearDestinations] = useState<Destination[]>([])
  const [isShownCard, setIsShownCard] = useState(false)
  const onClose = () => setIsShownCard(false)

  const locationModal = useModal()
  const accomodationModal = useModal()
  const hotelModal = useModal()
  const t = useTranslate()

  const loadNearLocations = async () => {
    if (previousDestination) {
      try {
        const { data } = await getNearDestinations(previousDestination.id)
        setNearDestinations(data.data)
        locationModal.open()
      } catch (error) {
        console.log(error)
      }
    } else alert('First location cannot be changed')
  }
  const сhangeHotel = async (id: number) => {
    try {
      const { data: newHotel } = await getHotel(id)
      const { data: newRooms } = await getRooms({ hotel: id })
      if (newHotel && newRooms.data?.length) {
        // @ts-ignore
        onChange(`destinations.${index}.hotel`, newHotel.data)
        setHotelRooms(newRooms.data)
      } else {
        alert(
          'Sorry, these is no room left'
        )
      }
    } catch (error) {
      console.log(error)
    }
    hotelModal.onClose()
  }
  const changeLocation = async (newLocation: number) => {
    try {
      const newTripDay = await getTripDayByDestination(newLocation)
      if (newTripDay) {
        onChange(`destinations.${index}.hotel`, newTripDay.hotel)
        onChange(`destinations.${index}.destination`, newTripDay.location.id)
        onChange(
          `destinations.${index}.destination_name`,
          newTripDay.location.name
        )
        onChange(
          `destinations.${index}.description`,
          newTripDay.location.description
        )
        setHotelRooms(newTripDay.rooms)
      } else
        alert(
          'Sorry, this location does not match, maybe these is no hotel or room left'
        )
    } catch (error) {
      console.log(error)
    }
  }

  const changeRoom = () => {
    accomodationModal.open()
  }
  const submitRoomChange = (index: number, newRoom: Room) => {
    const newRooms = [...clientRooms]
    newRooms[index] = newRoom
    setClientRooms(newRooms)
    onChange('rooms_ids', newRooms)
  }
  const getClientsRoom = (
    rooms: Room[],
    capacity: PeopleCapacity[]
  ): Room[] => {
    let roomsForClients: Room[] = []
    for (let i = 0; i < capacity?.length; i++) {
      const newRooms = findRooms(rooms, capacity[i].adults)
      roomsForClients = [...roomsForClients, ...newRooms]
    }
    return roomsForClients
  }

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const rooms = await getRooms({ hotel: hotel.id })
        setHotelRooms(rooms.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadRooms()
  }, [])

  useEffect(() => {
    setClientRooms(getClientsRoom(hotelRooms, capacity))
    onChange(`destinations.[${index}].rooms`, getClientsRoom(hotelRooms, capacity))
  }, [hotelRooms, capacity, onChange])

  return (
    <div className={s.container}>
      <Transfer
        onChange={(id: number, type: any) =>
          onChange(`transfers.${index}`, { id, type })
        }
        options={transfers[index]}
        from={from}
        to={destination.destination_name}
        value={null}
      />
      <div className={s.content}>
        <div className={s.header}>
          <div className={s.day}>
            {' '}
            {t('tripSteps.day')} {day}
          </div>
          <div className={s.dayTotal}>
            {t('tripSteps.out')} {total}
          </div>
          {onDelete && (
            <div onClick={() => onDelete(index)} className={s.deleteDay}>
              <TrashIcon />
            </div>
          )}
        </div>
        <div className={s.section}>
          <div className={s.sectionTitle}>{t('tripSteps.location')}:</div>
          <div className={s.sectionValue}>
            <span className={s.valueIcon}>
              <PinIcon />
            </span>
            <div className={s.valueName}>{destination.destination_name}</div>
          </div>
          <Button onClick={() => loadNearLocations()} classname={s.editBtn}>
            {t('tripSteps.edit')}
          </Button>
        </div>
        <div className={s.section}>
          <div className={s.sectionTitle}>{t('tripSteps.duration')}:</div>
          <div className={s.durationCounter}>
            {duration} {getDayName(duration)}
            <div className={s.counter}>
              <Counter
                min={1}
                value={duration}
                onChange={num =>
                  onChange(`destinations.${index}.duration`, num)
                }
              />
            </div>
          </div>
        </div>
        <div className={cn(s.section, s.descriptionSection)}>
          <div className={cn(s.sectionTitle, s.descriptionTitle)}>
            {t('tripSteps.description')}:
          </div>
          <div className={s.description}>
            <div className={s.descriptionText}>
              <div
                dangerouslySetInnerHTML={{
                  __html: isTruncated
                    ? truncate(description, { length: TRUNCATED_TEXT_SIZE })
                    : description,
                }}
              />
            </div>
            {isTruncated && description?.length > TRUNCATED_TEXT_SIZE && (
              <div onClick={() => setIsTruncated(false)} className={s.moreBtn}>
                {t('destinations.buttonMore')}
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
            </span>
            <div className={s.valueName}>{hotel.name}</div>
            <span
              onMouseEnter={() => setIsShownCard(true)}
              onMouseLeave={() => setIsShownCard(false)}
              className={s.infoBtn}
            >
              <InfoIcon />
              <RegionCard
                id={hotel.id}
                cardText={hotel.description}
                title={hotel.lrweb}
                link={`/hotels/${hotel.id}`}
                image={hotel.images?.[0] || ''}
                onClose={onClose}
                isOpen={isShownCard}
              />
            </span>
          </div>
          <Button onClick={() => hotelModal.open()} classname={s.editBtn}>
            {t('tripSteps.edit')}
          </Button>
        </div>
        {clientRooms.map((room, index) => {
          return (
            <>
              <div key={index} className={s.section}>
                <div className={s.roomTitle}>
                  {' '}
                  {t('tripSteps.room')} {index + 1}
                </div>
                <div
                  onClick={() => changeRoom()}
                  className={cn(s.sectionValue, s.changeRoom)}
                >
                  <PinIcon />
                  <div className={s.valueName}>
                    {room.room_name}
                    <span className={s.pencil}>
                      <PencilIcon />
                    </span>
                  </div>
                </div>
                <div className={s.roomCapacityTitle}>People in a room:</div>
                <div className={cn(s.sectionValue, s.roomCapacity)}>
                  {room.capacity}
                </div>
              </div>
              <Modal {...accomodationModal} title='Changing accomodation'>
                <ChangeAccomodationModal
                  onSubmit={newRoom => submitRoomChange(index, newRoom)}
                  hotel={hotel.name}
                  rooms={hotelRooms}
                  current={room.id}
                  {...accomodationModal}
                />
              </Modal>
            </>
          )
        })}
      </div>
      <Modal {...locationModal} title='Changing location'>
        <ChangeLocationModal
          {...locationModal}
          onSubmit={id => changeLocation(id)}
          current={destination.id}
          location={destination.destination_name}
          destinations={[...nearDestinations]}
        />
      </Modal>

      <Modal {...hotelModal} title={t('changingHotel.windowTitle')}>
        <ChangeHotelModal
          onSubmit={id => сhangeHotel(id)}
          destination={destination.id}
          {...hotelModal}
        />
      </Modal>
    </div>
  )
}
