import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Controller, useForm, useFieldArray } from 'react-hook-form'

import { InputCalendar, Input, Button } from 'components'

import { PeopleCapacity } from 'shared/types/order'

import trash from '/public/assets/images/Trash.svg?url'
import add from '/public/assets/images/plus.svg?url'

import s from './StartTripForm.module.scss'
import { useTranslate } from '../../shared/hooks/useTranslate'

export type FieldsType = {
  rooms: PeopleCapacity[]
  date: Date[]
}

interface StartTripFormProps {
  onChange: (fields: FieldsType) => void
}

export const StartTripForm: FC<StartTripFormProps> = ({ onChange }) => {
  const t = useTranslate()
  const [currentDate, setCurrentDate] = useState<Date[]>([
    new Date(),
    new Date(),
  ])

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fields: [{ adults: 0, children: 0 }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  })

  const onSubmit = (formData: any) => {
    onChange?.({ rooms: formData.fields, date: currentDate })
  }

  const setDate = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      setCurrentDate(date)
    }
  }

  return (
    <div>
      <div className={s.calendar}>
        <InputCalendar
          label={t('hotel.calendar')}
          variant={'double'}
          onChange={setDate}
          doubleValue={currentDate}
          isMulti={true}
        />
      </div>

      <form>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div className={s.optionWrap}>
                <div className={s.optionTitle}>
                  {t('tripSteps.room')} {index + 1}
                </div>
                <div className={s.trash} onClick={() => remove(index)}>
                  <Image src={trash} alt='trash' width={25} height={25} />
                </div>
              </div>

              <div className={s.numberInputWrap}>
                <Controller
                  name={`fields.${index}.adults`}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type={'number'}
                      withCounter={true}
                      label={t('hotel.counter1')}
                      value={value}
                      onChange={onChange}
                      classname={s.numberInput}
                    />
                  )}
                />

                <Controller
                  name={`fields.${index}.children`}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type={'number'}
                      onChange={onChange}
                      withCounter={true}
                      label={t('hotel.counter2')}
                      value={value}
                      classname={s.numberInput}
                    />
                  )}
                />
              </div>
            </div>
          )
        })}
      </form>

      <div
        className={s.addRoom}
        onClick={() =>
          append({
            adults: 0,
            children: 0,
          })
        }
      >
        <div className={s.addRoomWrap}>
          <span>
            <Image src={add} alt='' width={20} height={20} />
          </span>
          <div className={s.optionTitle}>{t('hotel.add')}</div>
        </div>
      </div>

      <Button onClick={handleSubmit(onSubmit)}>{t('hotel.buttonStart')}</Button>
    </div>
  )
}
