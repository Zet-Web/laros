import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'

import { ChevronRightIcon, Map, ResetIcon, ChevronLeftIcon } from 'components'
import { Step1 } from './Step1/Step1'
import { Step2 } from './Step2/Step2'

import { useGetTripInfo } from 'shared/hooks/useGetTripInfo'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'

import bg from '/public/assets/images/tripFormBg.png'

import s from './TripFormPage.module.scss'

export enum Steps {
  FIRST,
  SECOND,
}
// TODO Mock location in s.info
export const TripFormPage: FC = () => {
  const [step, setStep] = useState(Steps.FIRST)
  const { query } = useRouter()
  const dispatch = useAppDispatch()
  const [trip, airports, countries, isLoading] = useGetTripInfo(
    Number(query.trip)
  )
  const form = useAppSelector(state => state.order.form)
  useEffect(() => {
    if (trip) {
      dispatch(updateForm({ destinations: trip.destinations }))
      // TODO possible issue when user go to the step 2 and back
    }
  }, [trip])
  if (isLoading || !trip) {
    return <div>Loading...</div>
  }

  return (
    <div className={s.container}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <div className={s.content}>
        <div className={s.form}>
          <div className={s.header}>
            <div onClick={() => setStep(Steps.FIRST)}>
              <ChevronLeftIcon />{' '}
              <div className={s.title}>Back to previous step</div>
            </div>
            <div>
              <ResetIcon /> <div className={s.reset}>Reset all changes</div>
            </div>
          </div>
          <div className={s.crumbs}>
            <div
              className={cn(s.crumbStep, {
                [s.activeCrumb]: step === Steps.FIRST,
              })}
              onClick={() => setStep(Steps.FIRST)}
            >
              <span className={s.stepIndex}>1</span>
              <span className={s.crumbStep}>Step 1:</span>
              <span className={s.stepName}>Trip details</span>
            </div>
            <div className={s.arrow}>
              {' '}
              <ChevronRightIcon />{' '}
            </div>
            <div
              className={cn(s.crumbStep, {
                [s.activeCrumb]: step === Steps.SECOND,
              })}
            >
              <span className={s.stepIndex}>2</span>
              <span className={s.crumbStep}>Step 2:</span>
              <span className={s.stepName}>Travellers’ details</span>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.infoTitle}>{trip?.name}</div>
            <div className={s.infoLocation}>Peloponnese, Greece</div>
            {trip.description ? (
              <div className={s.infoDescription}>{trip?.description}</div>
            ) : null}
          </div>
          {step === Steps.FIRST ? (
            <Step1 setStep={setStep} trip={trip} airports={airports} />
          ) : (
            <Step2 setStep={setStep} countries={countries} />
          )}
        </div>
        <div className={s.sidebar}>
          <div className={s.map}>
            {trip?.route ? <Map route={trip.route} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
