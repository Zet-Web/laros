import { FC, useState } from 'react'
import s from './ChangeAccomodationModal.module.scss'
import { Modal } from 'components/Modal'
import { Button } from 'components/Button'
import { Room } from 'shared/types/hotel'
import { RoomCard } from './RoomCard'
import { useTranslate } from '../../shared/hooks/useTranslate'

interface ChangeAccomodationModalProps {
  rooms: Room[]
  hotel: string
  onClose: () => void
  onSubmit: (room: Room) => void
  current?: number
}
export const ChangeAccomodationModal: FC<ChangeAccomodationModalProps> = ({
  hotel,
  rooms,
  current,
  onClose,
  onSubmit,
}) => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const t = useTranslate()
  const changeAccomodation = () => {
    const newRoom = rooms.find((room) => room.id === selectedRoom)
    if (newRoom) {
      onSubmit(newRoom)
    } else {
      alert('This room cant be chosen, sorry')
    }
    onClose()
  }
  return (
    <div className={s.modal}>
      <div className={s.head}>
        <div className={s.title}>
          {t('changingRoomType.roomsOf')} {hotel}
        </div>
        <div className={s.description}>{t('changingRoomType.subTitle')}:</div>
      </div>
      <div className={s.rooms}>
        {rooms.map(room => (
          <RoomCard
            key={room.id}
            isCurrent={current === room.id}
            isSelected={selectedRoom === room.id}
            onClick={() => setSelectedRoom(room.id)}
            {...room}
          />
        ))}
      </div>
      <div className={s.actions}>
        <Button onClick={changeAccomodation}>
          {t('changingRoomType.save')}
        </Button>
        <Button onClick={onClose} variant='outline'>
          {t('changingRoomType.cancel')}
        </Button>
      </div>
    </div>
  )
}
