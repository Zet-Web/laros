import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Button } from 'components'
import { DestinationLayout } from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { useTranslate } from 'shared/hooks/useTranslate'

import bg from '/public/assets/images/worldwidebg.png'

import s from './DestinationWorldwidePage.module.scss'

export const DestinationWorldwidePage: FC = () => {
  const t = useTranslate()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { destinations } = useAppSelector(state => state.destinations)

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [dispatch])

  return (
    <div className={s.layoutWrapper}>
      <DestinationLayout
        currentDestination={Number(null)}
        destinations={destinations}
        description={t('destinations.worldWideDestination')}
        title={t('destinations.title')}
      >
        <div
          className={s.container}
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <div className={s.content}>
            <div className={s.title}>{t('destinationWorldWide.title')}</div>
            <div className={s.description}>
              {t('destinationWorldWide.subTitle')}
            </div>
            <div className={s.actions}>
              <Button
                onClick={() => router.push('/requests/?form=flights')}
                classname={s.flightBtn}
              >
                {t('destinationWorldWide.flightRequestText')}
              </Button>
              <Button
                onClick={() => router.push('/requests/?form=packages')}
                classname={s.packageBtn}
              >
                {t('destinationWorldWide.requestPackageText')}
              </Button>
            </div>
          </div>
        </div>
      </DestinationLayout>
    </div>
  )
}
