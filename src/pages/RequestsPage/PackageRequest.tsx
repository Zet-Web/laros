// @ts-nocheck
import { FC, useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import cn from 'classnames'

import {
  Button,
  Input,
  InputCalendar,
  CheckboxGroup,
  Radio,
  Select,
} from 'components'
import { TravellerForm, TravellerAddressForm } from 'features'

import { AppDispatch } from 'store'
import { getDayName } from 'shared/helpers/localize'
import { useAppDispatch } from 'shared/hooks/redux'
import { getAirports } from 'shared/api/routes/requests'
import { sendPackageRequestThunk } from 'store/slices/packageRequest/thunk'

import { Airport } from 'shared/types/airport'
import { PackageRequestFormType } from 'shared/types/requestForm'
import {
  DEFAULT_BOARD_TYPE,
  DEFAULT_DURATION,
  DEFAULT_HOTEL_CATEGORY,
  DEFAULT_TRANSFER_TYPE,
  DEFAULT_TRAVELLER,
} from 'shared/constants/packageRequest'
import {
  boardTypes,
  hotelCategory,
  transferOptions,
} from 'shared/constants/form'

import s from '../FlightRequestPage/FlightRequestPage.module.scss'

export const PackageRequestForm: FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [adultsCount, setAdultsCount] = useState<number>(1)
  const [childrenCount, setChildrenCount] = useState<number>(0)
  const [travellersCount, setTravellerCount] = useState<number>(0)

  const {
    handleSubmit,
    watch,
    control,
    formState: {},
  } = useForm<PackageRequestFormType & TravellerAddressForm>({
    defaultValues: {
      travellers: [DEFAULT_TRAVELLER],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'travellers',
  })

  const watchAdultsCount = watch('adults', adultsCount)
  const watchChildrenCount = watch('children', 0)

  useEffect(() => {
    if (watchAdultsCount != adultsCount) {
      watchAdultsCount > adultsCount
        ? append(DEFAULT_TRAVELLER)
        : remove(travellersCount - 1)
      setAdultsCount(watchAdultsCount)
    }
    if (watchChildrenCount != childrenCount) {
      watchChildrenCount > childrenCount
        ? append(DEFAULT_TRAVELLER)
        : remove(travellersCount - 1)
      setChildrenCount(watchChildrenCount)
    }
  }, [watchAdultsCount, watchChildrenCount])

  useEffect(() => {
    setTravellerCount(adultsCount + childrenCount)
  }, [adultsCount, childrenCount])

  // push data
  const onSubmit = (data: PackageRequestFormType) => {
    dispatch(sendPackageRequestThunk(data))
  }

  // get select options from Depart from, Arrival to
  const airportOptions = async (inputValue: string) => {
    const { data } = await getAirports(inputValue)
    return data.data.map((item: Airport) => ({
      label: item.name,
      value: item.id,
    }))
  }

  return (
    <div className={s.wrapper}>
      {/* 1-st row  */}
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

      {/* 2-d row */}
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
            />
          )}
        />
      </div>

      {/* 3-d row  */}
      <div className={s.row}>
        <div className={s.counterRow}>
          <Controller
            name='adults'
            defaultValue={adultsCount}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.counterInput}
                withCounter={true}
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
        <div className={s.travelDurationCounter}>
          <Controller
            name='travelDuration'
            defaultValue={DEFAULT_DURATION}
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <span className={s.dayString}>
                  {value && getDayName(value)}
                </span>
                <Input
                  classname={s.counterInput}
                  withCounter={true}
                  onChange={onChange}
                  value={value ? value : ''}
                  label='Travel duration'
                  type={'number'}
                />
              </>
            )}
          />
        </div>
      </div>

      {/* 4-th row */}
      <div className={cn(s.row, s.optionsRow)}>
        <Controller
          name='transferType'
          control={control}
          defaultValue={DEFAULT_TRANSFER_TYPE}
          render={({ field: { onChange, value } }) => (
            <div className={s.radio}>
              <div className={s.radioLabel}>Transfer</div>
              <Radio
                name='transferType'
                onChange={onChange}
                value={value ? value : ''}
                options={transferOptions}
              />
            </div>
          )}
        />
      </div>

      {/* 5th row */}
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>Hotel category:</div>
          <Controller
            name='hotelCategory'
            control={control}
            defaultValue={DEFAULT_HOTEL_CATEGORY}
            render={({ field: { onChange, value } }) => (
              <Select
                classname={s.select}
                onChange={onChange}
                options={hotelCategory}
                value={value}
              />
            )}
          />
        </div>
      </div>

      {/* 6th row */}
      <div className={cn(s.row, s.optionsRow)}>
        <div className={s.checkboxGroup}>
          <div className={s.checkboxLabel}>
            Board type (you can choose multiple)
          </div>
          <div className={s.checkbox}>
            <Controller
              name='boardType'
              control={control}
              defaultValue={DEFAULT_BOARD_TYPE}
              render={({ field: { onChange } }) => (
                <CheckboxGroup options={boardTypes} onChange={onChange} />
              )}
            />
          </div>
        </div>
      </div>

      {/* 5-th row  */}
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <Controller
            name='totalTripBudget'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={s.selectCHF}>
                <div className={s.inputLabel}>Total trip budget</div>
                <Input label={'CHF'} onChange={onChange} value={value} />
              </div>
            )}
          />
        </div>
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
            />
          ))}
        </ul>
      </div>

      <div className={s.emailWrapper}>
        <Controller
          name='email'
          control={control}
          defaultValue={'user@example.com'}
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
            value={value ? value : ''}
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
          <span>Terms & conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  )
}
