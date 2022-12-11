import { Button } from 'components/Button'
import { DestinationLayout } from 'features/DestinationLayout'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import s from './DestinationWorldwidePage.module.scss'
import bg from '/public/assets/images/worldwide__bg.jpg'
export const DestinationWorldwidePage: FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { destinations } = useAppSelector(state => state.destinations)

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [dispatch])
  return (
    <DestinationLayout
      currentDestination={Number(null)}
      destinations={destinations}
    >
      <div
        className={s.container}
        style={{
          backgroundImage: `url(${bg.src})`,
          width: '1040px',
          height: '730px',
        }}
      >
        <div className={s.content}>
          <div className={s.title}>Worldwide tours</div>
          <div className={s.description}>
            Turpis morbi nec enim id nulla vehicula condimentum. Curabitur
            fermentum vitae condimentum eu non imperdiet.
          </div>
          <div className={s.actions}>
            <Button
              onClick={() => router.push('/requests/?form=flights')}
              classname={s.flightBtn}
            >
              Flight request
            </Button>
            <Button
              onClick={() => router.push('/requests/?form=packages')}
              classname={s.packageBtn}
            >
              Request package
            </Button>
          </div>
        </div>
      </div>
    </DestinationLayout>
  )
}
