import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Controller, useForm, useFieldArray } from 'react-hook-form'

import { InputCalendar, Input, Button } from 'components'

import { PeopleCapacity } from 'shared/types/order'

import trash from '/public/assets/images/Trash.svg?url'
import add from '/public/assets/images/plus.svg?url'

import s from './StartTripForm.module.scss'

export type FieldsType = {
  rooms: PeopleCapacity[]
  date: Date[]
}

interface StartTripFormProps {
  onChange: (fields: FieldsType) => void
}

export const StartTripForm: FC<StartTripFormProps> = ({ onChange }) => {
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
          label={'Your travel period'}
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
                <div className={s.optionTitle}>Room {index + 1}</div>
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
                      label={'Adults'}
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
                      label={'Children (2-12 years old):'}
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
        <span>
          <Image src={add} alt='' width={20} height={20} />
        </span>
        <div className={s.optionTitle}>Add room</div>
      </div>

      <Button onClick={handleSubmit(onSubmit)}>Start trip planning</Button>
    </div>
  )
}
