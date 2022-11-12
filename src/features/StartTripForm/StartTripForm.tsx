import React from 'react'
import Image from 'next/image'

import { InputCalendar } from 'components/InputCalendar'
import { Input } from 'components/Input'
import { Button } from 'components'

import trash from '/public/assets/images/Trash.svg?url'
import add from '/public/assets/images/plus.svg?url'

import s from './StartTripForm.module.scss'

export const StartTripForm = () => {
  return (
    <div>
      <InputCalendar
        label={'Your travel period'}
        variant={'right'}
        classname={s.calendar}
      />

      <div className={s.optionWrap}>
        <div className={s.optionTitle}>Room 1</div>
        <Image src={trash} alt='trash' width={25} height={25} />
      </div>

      <div className={s.numberInputWrap}>
        <Input
          type={'number'}
          placeholder={'Adults'}
          onChange={() => {}}
          withCounter={true}
          label={''}
          classname={s.numberInput}
        />
        <Input
          type={'number'}
          onChange={() => {}}
          placeholder={'Children (2-12 years old):'}
          withCounter={true}
          label={''}
          value={1}
          classname={s.numberInput}
        />
      </div>

      <div className={s.addRoom}>
        <span>
          <Image src={add} alt='' width={20} height={20} />
        </span>
        <div className={s.optionTitle}>Add room</div>
      </div>

      <Button>Start trip planning</Button>
    </div>
  )
}
