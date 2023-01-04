import { FC, useEffect, useState } from 'react'
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'

import { Button, Input, InputCalendar, Radio, Select } from 'components'
import { TravellerAddressForm, TravellerForm } from 'features'

import { useTranslate } from 'shared/hooks/useTranslate'

import { useAppDispatch } from 'shared/hooks/redux'
import { sendFlightRequestThunk } from 'store/slices/flightRequest/thunk'

import { classOptions, REQUEST_FORMS } from 'shared/constants/form'

import { getAirports } from 'shared/api/routes/requests'
import { Airport } from 'shared/types/airport'

import {
  FlightRequestFormType,
  PackageRequestFormType,
} from 'shared/types/requestForm'

import s from './FlightRequestPage.module.scss'

export enum FlightClass {
  First,
  Econom,
  Business,
}
interface FlightRequestFormProps {
  onFormSubmit: () => void
}
export const FlightRequestForm: FC<FlightRequestFormProps> = ({
  onFormSubmit,
}) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const t = useTranslate()

  const DEFAULT_ADULTS_COUNT = 2 // more to shared/ folder
  const [adultsCount, setAdultsCount] = useState(DEFAULT_ADULTS_COUNT)
  const [childrenCount, setChildrenCount] = useState(0)
  let travellersCount = adultsCount + childrenCount

  const {
    handleSubmit,
    watch,
    control,
    formState: {},
  } = useForm<
    TravellerAddressForm & (FlightRequestFormType | PackageRequestFormType)
  >({
    defaultValues: {
      travellers: [REQUEST_FORMS, REQUEST_FORMS],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'travellers',
  })

  const watchAdultsCount = watch('adults', DEFAULT_ADULTS_COUNT)
  const watchChildrenCount = watch('children', 0)

  const onSubmit: SubmitHandler<
    TravellerAddressForm & (FlightRequestFormType | PackageRequestFormType)
  > = data => {
    dispatch(
      sendFlightRequestThunk(
        data as FlightRequestFormType & TravellerAddressForm
      )
    )
    onFormSubmit()
  }

  useEffect(() => {
    if (watchAdultsCount != adultsCount) {
      //if adults count are increased, we append traveller field array
      watchAdultsCount > adultsCount
        ? append(REQUEST_FORMS)
        : // if adults count are decreased, we remove traveller field array
          remove(travellersCount - 1)
      setAdultsCount(watchAdultsCount)
    }

    if (watchChildrenCount != childrenCount) {
      watchChildrenCount > childrenCount
        ? append(REQUEST_FORMS)
        : remove(travellersCount - 1)
      setChildrenCount(watchChildrenCount)
    }
  }, [watchAdultsCount, watchChildrenCount])

  const airportOptions = async (inputValue: string) => {
    const { data } = await getAirports(inputValue)
    return data.data.map((item: Airport) => ({
      label: item.name,
      value: item.id,
    }))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>{t('worldwideTours.label1')}:</div>
          <Controller
            name='departFrom'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Select
                classname={s.select}
                placeholder={t('common.select')}
                onChange={onChange}
                loadOptions={airportOptions}
                options={[]}
                async
              />
            )}
          />
        </div>

        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>{t('worldwideTours.label2')}:</div>
          <Controller
            name='arrivalTo'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Select
                classname={s.select}
                onChange={onChange}
                placeholder={t('common.select')}
                loadOptions={airportOptions}
                options={[]}
                async
              />
            )}
          />
        </div>
      </div>

      <div className={s.row}>
        <Controller
          name='earliestDeparture'
          control={control}
          render={({ field: { onChange } }) => (
            <InputCalendar
              required
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={t('worldwideTours.label3')}
            />
          )}
        />

        <Controller
          name='latestReturn'
          control={control}
          render={({ field: { onChange } }) => (
            <InputCalendar
              required
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={t('worldwideTours.label4')}
              error={false}
              handleIconClick={() => {}}
            />
          )}
        />
      </div>

      <div className={s.row}>
        <Controller
          name='class'
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className={s.radio}>
              <div className={s.radioLabel}>{t('worldwideTours.label5')}</div>
              <Radio
                name='class'
                onChange={onChange}
                value={value}
                options={classOptions}
              />
            </div>
          )}
        />
      </div>

      <div className={cn(s.row, s.counterRow)}>
        <Controller
          name='adults'
          defaultValue={adultsCount}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              classname={s.counterInput}
              withCounter={true}
              min={1}
              onChange={onChange}
              value={value}
              label={t('forms.inputNumber1')}
              type={'number'}
            />
          )}
        />
        <Controller
          name='children'
          defaultValue={childrenCount}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              classname={s.counterInput}
              withCounter={true}
              onChange={onChange}
              value={value}
              label={t('forms.inputNumber2')}
              type={'number'}
            />
          )}
        />
      </div>

      <div className={s.travellersSection}>
        <h2 className={s.travellersSubtitle}>{`${travellersCount} ${t(
          'worldwideTours.travellersTotal'
        )}`}</h2>

        <ul className={s.travellersList}>
          {fields.map((field, index) => (
            <TravellerForm
              key={index}
              field={field}
              index={index}
              control={control}
              watch={watch}
            />
          ))}
        </ul>
      </div>

      <div className={s.emailWrapper}>
        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              required
              type='email'
              classname={s.input}
              onChange={onChange}
              value={value}
              label={t('forms.inputLabel2')}
              placeholder={t('forms.email3')}
            />
          )}
        />
      </div>

      <Controller
        name='comment'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            classname={s.commentInput}
            onChange={onChange}
            value={value}
            label={t('worldwideTours.label11')}
            placeholder={t('worldwideTours.label12')}
          />
        )}
      />

      <div className={s.footer}>
        <Button
          onClick={handleSubmit(onSubmit)}
          type='submit'
          classname={s.submitButton}
        >
          {t('worldwideTours.submitButton')}
        </Button>

        <p className={s.privacyPolicy}>
          {t('worldwideTours.Privacy1')}{' '}
          <Link className={s.link} href={'/terms/1'}>
            {t('worldwideTours.Privacy2')}
          </Link>{' '}
          {t('worldwideTours.Privacy3')}{' '}
          <Link className={s.link} href={'/terms/1'}>
            {t('worldwideTours.Privacy4')}
          </Link>
        </p>
      </div>
    </div>
  )
}
