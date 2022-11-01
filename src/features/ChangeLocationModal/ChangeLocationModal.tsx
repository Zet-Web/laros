import { Modal } from 'components'
import { FC, useState } from 'react'
import { Destination } from 'shared/types/destinations'
import s from './ChangeLocationModal.module.scss'
import { LocationCard } from './LocationCard'
interface ChangeLocationModalProps {
  destinations: Destination[]
  isOpen: boolean
  onClick: (hotel: number) => void
  onClose: () => void
}
export const ChangeLocationModal: FC<ChangeLocationModalProps> = ({
  destinations,
  isOpen,
  onClick,
  onClose,
}) => {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(1)
  const openDestinationModal = () => {
    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Changing location'>
      <div className={s.content}>
        <div className={s.title}>Areas of Macedonia</div>
        <div className={s.description}>
          To change your staying location, please choose one of the following:
        </div>
        <div className={s.cards}>
          {destinations.map((destination, idx) => (
            <LocationCard
              isSelected={selectedHotel === destination.id}
              onCardClick={() => openDestinationModal()}
              onSelect={setSelectedHotel}
              key={idx}
              {...destination}
            />
          ))}
        </div>
      </div>
    </Modal>
  )
}
