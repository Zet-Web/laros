import { Modal } from 'components'
import { AddLocationModal } from 'features/AddLocationModal'
import { FC, useState } from 'react'
import { useModal } from 'shared/hooks/useModal'
import { Destination } from 'shared/types/destinations'
import s from './ChangeLocationModal.module.scss'
import { LocationCard } from './LocationCard'
import { useTranslate } from '../../shared/hooks/useTranslate'
interface ChangeLocationModalProps {
  destinations: Destination[]
  current: number
  location: string
  onSubmit: (hotel: number) => void
  onClose: () => void
}
export const ChangeLocationModal: FC<ChangeLocationModalProps> = ({
  destinations,
  location,
  current,
  onSubmit,
  onClose
}) => {
  const destinationInfoModal = useModal();
  const [selectedLocation, setSelectedLocation] = useState<number | null>(current)
  const [openedDestination, setOpenedDestination] = useState<Destination>(destinations[0])
  const t = useTranslate()

  const openDestinationModal = (id: number) => {
    destinationInfoModal.open()
    const selectedDestination = destinations.find(
      dest => dest.id === id
    ) as Destination
    setOpenedDestination(selectedDestination)
  }
  const selectLocation = (id: number) => {
    setSelectedLocation(id)
    onSubmit(id)
    destinationInfoModal.onClose()
    onClose()
  }

  return (
    <>
      <div className={s.content}>
        <div className={s.title}>
          {t('changingLocation.title')} {location}
        </div>
        <div className={s.description}>{t('changingLocation.subTitle')}:</div>
        <div className={s.cards}>
          {destinations.map((destination, idx) => (
            <LocationCard
              isSelected={selectedLocation === destination.id}
              onCardClick={() => openDestinationModal(destination.id)}
              onSelect={selectLocation}
              key={idx}
              {...destination}
            />
          ))}
        </div>
      </div>
      <Modal {...destinationInfoModal} title='Adding location'>
        <AddLocationModal {...destinationInfoModal} {...openedDestination} onClick={selectLocation} />
      </Modal>
    </>
  )
}
