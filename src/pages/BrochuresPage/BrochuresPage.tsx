import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { DownloadBrochuresModal } from 'features/DownloadBrochuresModal'
import { SendBrochuresModal } from 'features/SendBrochuresModal'
import { FC, useEffect, useState } from 'react'
import { getSelectedBrochures } from 'shared/helpers/brochures'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { toggleBrochure } from 'store/slices/brochures/brochures'
import { getBrochuresThunk } from 'store/slices/brochures/thunk'
import { BrochureCard } from './BrochureCard'
import s from './BrochuresPage.module.scss'

export const BrochuresPage: FC = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false)
  const [isSendModalOpen, setIsSendModalOpen] = useState<boolean>(false)
  const brochures = useAppSelector(state => state.brochures.brochures)
  const totalSelected = getSelectedBrochures(brochures)
  const totalCounter = totalSelected.length
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBrochuresThunk())
  }, [dispatch])
  const onBrochureDownload = (id: number) => {
    dispatch(toggleBrochure({ id, selected: true }))
    setIsDownloadModalOpen(true)
  }
  return (
    <>
      <Container>
        <div className={s.wrapper} key={s.title}>
          <div className={s.title}>Brochures</div>
          <div className={s.nav} key={s.title}>
            <div className={s.subtitle}>
              Faucibus enim sit leo, purus, odio erat. Neque scelerisque
              volutpat morbi proin. Massa quis montes, scelerisque commodo elit
              erat in urna id. Purus sit odio egestas venenatis viverra blandit
              amet vitae.
            </div>
            {totalCounter ? (
              <Button
                onClick={() => setIsSendModalOpen(true)}
                classname={s.selectBtn}
                variant='secondary'
              >
                Send me selected ({totalCounter})
              </Button>
            ) : (
              <div className={s.noSelectBtn}>Send me selected</div>
            )}
          </div>
          <div className={s.sort}>Sort</div>
          <div className={s.brochuresList}>
            {brochures.map(brochure => (
              <BrochureCard
                onDownload={id => onBrochureDownload(id)}
                {...brochure}
                onSelect={id => dispatch(toggleBrochure({ id }))}
                key={brochure.id}
              />
            ))}
          </div>
        </div>
        <SendBrochuresModal
          brochures={totalSelected}
          isOpen={isSendModalOpen}
          onClose={() => setIsSendModalOpen(false)}
        />
        <DownloadBrochuresModal
          brochures={totalSelected}
          isOpen={isDownloadModalOpen}
          onClose={() => setIsDownloadModalOpen(false)}
        />
      </Container>
    </>
  )
}
