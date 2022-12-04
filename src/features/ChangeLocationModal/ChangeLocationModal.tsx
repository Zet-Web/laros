import { Modal } from 'components'
import { AddLocationModal } from 'features/AddLocationModal'
import { FC, useState } from 'react'
import { useModal } from 'shared/hooks/useModal'
import { Destination } from 'shared/types/destinations'
import s from './ChangeLocationModal.module.scss'
import { LocationCard } from './LocationCard'
interface ChangeLocationModalProps {
  destinations: Destination[]
  current: number;
  location: string
  isOpen: boolean
  onSubmit: (hotel: number) => void
  onClose: () => void
}
export const ChangeLocationModal: FC<ChangeLocationModalProps> = ({
  destinations,
  location,
  current,
  isOpen,
  onSubmit,
  onClose,
}) => {
  const destinationInfoModal = useModal();
  const [selectedLocation, setSelectedLocation] = useState<number | null>(current)
  const [openedDestination, setOpenedDestination] = useState<Destination>(destinations[0])

  const openDestinationModal = (id: number) => {
    destinationInfoModal.open()
    const selectedDestination = destinations.find((dest) => dest.id === id) as Destination;
    setOpenedDestination(selectedDestination);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Changing location'>
      <div className={s.content}>
        <div className={s.title}>Areas of {location}</div>
        <div className={s.description}>
          To change your staying location, please choose one of the following:
        </div>
        <div className={s.cards}>
          {destinations.map((destination, idx) => (
            <LocationCard
              isSelected={selectedLocation === destination.id}
              onCardClick={() => openDestinationModal(destination.id)}
              onSelect={onSubmit}
              key={idx}
              {...destination}
            />
          ))}
        </div>
      </div>
      <AddLocationModal {...destinationInfoModal} {...openedDestination} onClick={setSelectedLocation} />
    </Modal>
  )
}
