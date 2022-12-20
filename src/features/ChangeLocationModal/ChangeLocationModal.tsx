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
  const destinationInfoModal = useModal()
  const [selectedLocation, setSelectedLocation] = useState<number | null>(
    current
  )
  const [openedDestination, setOpenedDestination] = useState<Destination>(
    destinations[0]
  )
  const t = useTranslate()

  const openDestinationModal = (id: number) => {
    destinationInfoModal.open()
    const selectedDestination = destinations.find(
      dest => dest.id === id
    ) as Destination
    setOpenedDestination(selectedDestination)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('changingLocation.windowTitle')}
    >
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
              onSelect={onSubmit}
              key={idx}
              {...destination}
            />
          ))}
        </div>
      </div>
      <AddLocationModal
        {...destinationInfoModal}
        {...openedDestination}
        onClick={setSelectedLocation}
      />
    </Modal>
  )
}
