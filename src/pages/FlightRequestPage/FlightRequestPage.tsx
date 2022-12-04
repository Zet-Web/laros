import { FC, useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import cn from 'classnames'
import AsyncSelect from 'react-select/async'

import { Input, Select, Button, InputCalendar, Radio } from 'components'
import { TravellerForm, TravellerAddressForm } from 'features'

import { useAppDispatch } from 'shared/hooks/redux'
import { sendFlightRequestThunk } from 'store/slices/flightRequest/thunk'

import { classOptions, REQUEST_FORMS } from 'shared/constants/form'

import { getAirports } from 'shared/api/routes/requests'
import { Airport } from 'shared/types/airport'
import { Meta, Option } from 'shared/types'

import s from './FlightRequestPage.module.scss'

export enum FlightClass {
  First,
  Econom,
  Business,
}

interface Traveller {
  name: string
  address: string
  address1: string
  address2: string
  birth: string
  gender: string
  nationality: string
}

export interface FlightRequestFormType {
  departFrom: Option
  arrivalTo: Option
  earliestDeparture: string
  latestReturn: string
  class: string
  adults: number
  children: number
  email: string
  comment: string
  travellers: Traveller[]
}

export const FlightRequestForm: FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const DEFAULT_ADULTS_COUNT = 2 // more to shared/ folder
  const [adultsCount, setAdultsCount] = useState(DEFAULT_ADULTS_COUNT)
  const [childrenCount, setChildrenCount] = useState(0)
  const [countries, setCountries] = useState<Meta[]>([{ id: 1, name: 'sdf' }]) // TODO add country loading
  let travellersCount = adultsCount + childrenCount

  const {
    handleSubmit,
    watch,
    control,
    formState: {},
  } = useForm<FlightRequestFormType & TravellerAddressForm>({
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

  const onSubmit = (data: FlightRequestFormType) =>
    dispatch(sendFlightRequestThunk(data))

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
    const options = data.data.map((item: Airport) => ({
      label: item.name,
      value: item.id,
    }))
    return options
  }

  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>Depart from:</div>
          <Controller
            name='departFrom'
            control={control}
            render={({ field: { onChange } }) => (
              <Select
                classname={s.select}
                onChange={onChange}
                loadOptions={airportOptions}
                options={[]}
                async
              />
            )}
          />
        </div>

        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>Arrival to:</div>
          <Controller
            name='arrivalTo'
            control={control}
            render={({ field: { onChange } }) => (
              <Select
                classname={s.select}
                onChange={onChange}
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
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={'Earliest departure'}
            />
          )}
        />

        <Controller
          name='latestReturn'
          control={control}
          render={({ field: { onChange } }) => (
            <InputCalendar
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={'Latest return'}
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
              <div className={s.radioLabel}>Class</div>
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
              label='Adults'
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
              label='Children'
              type={'number'}
            />
          )}
        />
      </div>

      <div className={s.travellersSection}>
        <h2
          className={s.travellersSubtitle}
        >{`${travellersCount} Travellers in total`}</h2>
        <ul className={s.travellersList}>
          {fields.map((field, index) => (
            <TravellerForm
              key={index}
              field={field}
              index={index}
              control={control}
              watch={watch}
              countries={countries}
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
              type='email'
              classname={s.input}
              onChange={onChange}
              value={value}
              label='Email address'
              placeholder='jon.doe@example.com'
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
            label='Additional comments'
            placeholder='Tap to add'
          />
        )}
      />

      <div className={s.footer}>
        <Button
          onClick={handleSubmit(onSubmit)}
          type='submit'
          classname={s.submitButton}
        >
          Submit request
        </Button>
        <p className={s.footerDescr}>
          By clicking the “Send” button you automatically agree to our{' '}
          <Button
            onClick={() => router.push('/terms')} // TODO link to certain tab like terms/1
            classname={s.termsButton}
          >
            Terms & conditions
          </Button>{' '}
          and{' '}
          <Button
            onClick={() => router.push('/terms')}
            classname={s.termsButton}
          >
            Privacy Policy
          </Button>
        </p>
      </div>
    </div>
  )
}
