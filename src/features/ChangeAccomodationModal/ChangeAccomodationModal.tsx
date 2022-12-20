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
  isOpen: boolean
  onClose: () => void
  onSubmit: (room: number) => void
  current?: number
}
export const ChangeAccomodationModal: FC<ChangeAccomodationModalProps> = ({
  hotel,
  rooms,
  current,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const t = useTranslate()
  const [selectedRoom, setSelectedRoom] = useState<number | null>(1)
  const changeAccomodation = () => {
    if (selectedRoom) {
      onSubmit(selectedRoom)
    }
  }
  return (
    <Modal
      title={t('changingRoomType.windowTitle')}
      isOpen={isOpen}
      onClose={onClose}
      classname={s.modal}
    >
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
    </Modal>
  )
}
