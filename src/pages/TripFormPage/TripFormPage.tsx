import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { ChevronRightIcon, ChevronLeftIcon } from 'components'
import { Step1 } from './Step1/Step1'
import { Step2 } from './Step2/Step2'

import { useGetTripInfo } from 'shared/hooks/useGetTripInfo'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'
import { useTranslate } from 'shared/hooks/useTranslate'
import { Sidebar } from './Sidebar/Sidebar'
import { getTripPdf } from 'shared/api/routes/trips'

import { PeopleCapacity } from 'shared/types/order'

import bg from '/public/assets/images/tripFormBg.png'

import s from './TripFormPage.module.scss'
import { countriesToOptions } from 'shared/helpers/transformers'

export enum Steps {
  FIRST,
  SECOND,
}
export const TripFormPage: FC = () => {
  const [step, setStep] = useState(Steps.FIRST)
  const { query, push } = useRouter()
  const dispatch = useAppDispatch()
  const t = useTranslate()

  const [trip, airports, countries, isLoading, transfers] = useGetTripInfo(
    Number(query.trip)
  )

  const form = useAppSelector(state => state.order.form)

  // download trip pdf
  const handleDownload = async () => {
    try {
      const { data } = await getTripPdf(2)
      // console.log(data)
    } catch ({ error }) {
      console.log(error)
    }
  }

  // next step
  const handleNextStep = () => {
    setStep(Steps.SECOND)
  }

  const getCapacity = (capacity: PeopleCapacity[]): number => {
    return capacity.reduce((prev, next) => prev + next.adults, 0)
  }

  useEffect(() => {
    if (trip) {
      dispatch(updateForm({ destinations: trip.destinations }))
      // TODO possible issue when user go to the step 2 and back
    }
  }, [trip, dispatch])

  if (isLoading || !trip) {
    return <div>{t('common.loadingText')}</div>
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
            <div
              onClick={() =>
                step === Steps.FIRST
                  ? push(`/trips/${query.trip}`)
                  : setStep(Steps.FIRST)
              }
            >
              <ChevronLeftIcon />
              <div className={s.title}>{t('tripSteps.buttonBack')}</div>
            </div>
            {/* <div>
              <ResetIcon /><div className={s.reset}>Reset all changes</div>
            </div> */}
          </div>

          <div className={s.crumbs}>
            <div
              className={cn(s.crumbStep, {
                [s.activeCrumb]: step === Steps.FIRST,
              })}
              onClick={() => setStep(Steps.FIRST)}
            >
              <span className={s.stepIndex}>1</span>
              <span className={s.crumbStep}>{t('tripSteps.step')} 1:</span>
              <span className={s.stepName}>{t('tripSteps.details')}</span>
            </div>

            <div className={s.arrow}>
              <ChevronRightIcon />
            </div>

            <div
              className={cn(s.crumbStep, {
                [s.activeCrumb]: step === Steps.SECOND,
              })}
            >
              <span className={s.stepIndex}>2</span>
              <span className={s.crumbStep}>{t('tripSteps.step')} 2:</span>
              <span className={s.stepName}>{t('tripSteps.travellers')}</span>
            </div>
          </div>

          <div className={s.info}>
            <div className={s.infoTitle}>{trip?.name}</div>

            <div className={s.infoLocation}>{trip?.offer_name}</div>

            {trip.description ? (
              <div className={s.infoDescription}>
                <div dangerouslySetInnerHTML={{ __html: trip?.description }} />
              </div>
            ) : null}
          </div>

          {step === Steps.FIRST ? (
            <Step1
              setStep={setStep}
              trip={trip}
              airports={airports}
              form={form}
              transfers={transfers}
            />
          ) : (
            <Step2
              setStep={setStep}
              capacity={getCapacity(form.rooms)}
              countries={countriesToOptions(countries)}
            />
          )}
        </div>

        <Sidebar
          route={trip?.route}
          travel_date={form.date_start}
          rooms={form.rooms}
          total={trip.price_chf}
          handleDownload={handleDownload}
          handleNextStep={handleNextStep}
        />
      </div>
    </div>
  )
}
