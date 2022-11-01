import { Button, CarIcon, ConfirmIcon, Modal } from 'components'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { Car, TransferType } from 'shared/types/car'
import { getCarGroups, getCarsByGroup } from 'store/slices/transfer/selectors'
import { CarCard } from './CarCard'
import s from './ChangeTransferModal.module.scss'
import cn from 'classnames'
interface ChangeTransferModalProps {
  cars: Car[]
  type: TransferType
  current?: number
  isOpen: boolean
  onClose: () => void
  onClick: (type: TransferType, id?: number) => void
}
export const ChangeTransferModal: FC<ChangeTransferModalProps> = ({
  isOpen,
  onClose,
  onClick,
  cars,
  current,
  type,
}) => {
  const [selectedCar, setSelectedCar] = useState<number | undefined>(current)
  const [transferType, setTransferType] = useState<TransferType>(type)
  const changeTransfer = () => {
    if (transferType === TransferType.PICKUP) {
      onClick(TransferType.PICKUP)
    } else {
      onClick(TransferType.RENTAL, selectedCar)
    }
    onClose()
  }
  const selectCar = (id: number) => {
    setTransferType(TransferType.RENTAL)
    setSelectedCar(id)
  }
  const ConfirmMark = (
    <div className={s.currentIcon}>
      <ConfirmIcon />
    </div>
  )
  const CarMark = (
    <div className={s.headerIcon}>
      <CarIcon />
    </div>
  )
  // TODO current, header classes can be renamed
  return (
    <Modal title='Changing transfer option' isOpen={isOpen} onClose={onClose}>
      <div className={s.container}>
        <div className={s.title}>Available transfer options:</div>
        <div
          className={cn(s.current, {
            [s.selected]: transferType === TransferType.PICKUP,
          })}
          onClick={() => setTransferType(TransferType.PICKUP)}
        >
          <div className={s.currentTitle}>Current</div>
          <div className={s.currentModel}>
            {transferType === TransferType.PICKUP ? ConfirmMark : CarMark}
            <div className={s.currentName}>Car pick-up</div>
          </div>
          <div className={s.currentDescription}>
            Sed mauris tincidunt justo malesuada pharetra, viverra in arcu
            ultrices. Donec aliquam nulla massa viverra aliquam diam ac leo.
          </div>
        </div>
        <div
          className={cn(s.cars, {
            [s.selected]: transferType === TransferType.RENTAL,
          })}
        >
          <div className={s.header}>
            <div className={s.headerContainer}>
              {transferType === TransferType.RENTAL ? ConfirmMark : CarMark}
              <div className={s.headerTitle}>Car rental</div>
              <div className={s.headerTerms}>
                Car Rental{' '}
                <span className={s.termsLink}>
                  <Link href='/terms'> Terms and Conditions</Link>
                </span>
              </div>
            </div>
            <div className={s.headerDescription}>
              Etiam aliquam pretium praesent egestas placerat semper vestibulum
              fermentum, sit. Duis arcu ultrices et arcu.
            </div>
          </div>
          <div className={s.tabsSection}>
            <Tabs
              selectedTabClassName={s.selectedTab}
              defaultIndex={0}
              className={s.tabs}
            >
              <TabList className={s.tabList}>
                {getCarGroups(cars).map((group, idx) => {
                  return <Tab className={s.tab} key={idx}>{group}</Tab>
                })}
              </TabList>
              {getCarGroups(cars).map((group, idx) => {
                return (
                  <TabPanel className={s.tabPanel} key={idx}>
                    <div className={s.carsList}>
                      {getCarsByGroup(cars, group).map((car, idx) => {
                        const isCarSelected =
                          selectedCar === car.id &&
                          transferType === TransferType.RENTAL
                        return (
                          <CarCard
                            isSelected={isCarSelected}
                            onClick={id => selectCar(id)}
                            key={idx}
                            {...car}
                          />
                        )
                      })}
                    </div>
                  </TabPanel>
                )
              })}
            </Tabs>
          </div>
        </div>
        <div className={s.actions}>
          <Button onClick={() => changeTransfer()}>Save changes</Button>
          <Button onClick={onClose} variant='outline'>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  )
}
