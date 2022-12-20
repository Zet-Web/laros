import { Button, CarIcon, ConfirmIcon, Modal } from 'components'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { Car, TransferType } from 'shared/types/car'
import { getCarGroups, getCarsByGroup } from 'store/slices/transfer/selectors'
import { CarCard } from './CarCard'
import s from './ChangeTransferModal.module.scss'
import cn from 'classnames'
import { useTranslate } from '../../shared/hooks/useTranslate'
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
  const t = useTranslate()
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
    <Modal
      title={t('changingTransfer.windowTitle')}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={s.container}>
        <div className={s.title}>{t('changingTransfer.title')}:</div>
        <div
          className={cn(s.current, {
            [s.selected]: transferType === TransferType.PICKUP,
          })}
          onClick={() => setTransferType(TransferType.PICKUP)}
        >
          <div className={s.currentTitle}>{t('changingTransfer.current')}</div>
          <div className={s.currentModel}>
            {transferType === TransferType.PICKUP ? ConfirmMark : CarMark}
            <div className={s.currentName}>{t('changingTransfer.car')}</div>
          </div>
          <div className={s.currentDescription}>
            {t('changingTransfer.text1')}
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
              <div className={s.headerTitle}>
                {t('changingTransfer.carRental')}
              </div>
              <div className={s.headerTerms}>
                {t('changingTransfer.carRental')}{' '}
                <span className={s.termsLink}>
                  <Link href='/terms'>{t('changingTransfer.terms')}</Link>
                </span>
              </div>
            </div>
            <div className={s.headerDescription}>
              {t('changingTransfer.text2')}
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
                  return (
                    <Tab className={s.tab} key={idx}>
                      {group}
                    </Tab>
                  )
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
          <Button onClick={() => changeTransfer()}>
            {t('tripSteps.save')}
          </Button>
          <Button onClick={onClose} variant='outline'>
            {t('tripSteps.cancel')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
