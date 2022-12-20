import { FC, useEffect, useState } from 'react'

import { BrochureCard } from './BrochureCard'
import { Button, Container } from 'components'
import { DownloadBrochuresModal, SendBrochuresModal } from 'features'

import { getSelectedBrochures, loadBrochure } from 'shared/helpers/brochures'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { toggleBrochure } from 'store/slices/brochures/brochures'
import { getBrochuresThunk } from 'store/slices/brochures/thunk'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './BrochuresPage.module.scss'

export const BrochuresPage: FC = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false)
  const [isSendModalOpen, setIsSendModalOpen] = useState<boolean>(false)
  const { brochures, isDownloadFormSent } = useAppSelector(
    state => state.brochures
  )

  const totalSelected = getSelectedBrochures(brochures)
  const totalCounter = totalSelected.length
  const dispatch = useAppDispatch()
  const t = useTranslate()

  useEffect(() => {
    dispatch(getBrochuresThunk())
  }, [dispatch])

  const onBrochureDownload = (id: number, file: string) => {
    if (isDownloadFormSent) {
      loadBrochure(file)
    } else {
      dispatch(toggleBrochure({ id, selected: true }))
      setIsDownloadModalOpen(true)
    }
  }
  return (
    <>
      <Container>
        <div className={s.wrapper} key={s.title}>
          <div className={s.title}>{t('brochures.title')}</div>

          <div className={s.nav} key={s.title}>
            <div className={s.subtitle}>{t('brochures.subtitle')}</div>
            {totalCounter ? (
              <Button
                onClick={() => setIsSendModalOpen(true)}
                classname={s.selectBtn}
                variant='secondary'
              >
                {t('brochures.sendMeText')} ({totalCounter})
              </Button>
            ) : (
              <div className={s.noSelectBtn}>{t('brochures.sendMeText')}</div>
            )}
          </div>

          <div className={s.sort}>{t('brochures.sort')}</div>

          <div className={s.brochuresList}>
            {brochures.map(brochure => (
              <BrochureCard
                onDownload={(id, file) => onBrochureDownload(id, file)}
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
