import React from 'react'
import Image from 'next/image'
import { Controller, useForm, useFieldArray } from 'react-hook-form'

import { InputCalendar } from 'components/InputCalendar'
import { Input } from 'components/Input'
import { Button } from 'components'

import trash from '/public/assets/images/Trash.svg?url'
import add from '/public/assets/images/plus.svg?url'

import s from './StartTripForm.module.scss'

export const StartTripForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      fields: [{ adults: 0, children: 0 }],
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  })

  return (
    <div>
      <InputCalendar
        label={'Your travel period'}
        variant={'right'}
        classname={s.calendar}
        error={false}
        handleIconClick={() => {}}
      />

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

      <Button>Start trip planning</Button>
    </div>
  )
}
