import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { PencilIcon } from 'components'

import s from './AddressInput.module.scss'
interface AddressInputProps {
  control: Control
}

export const AddressInput: FC<AddressInputProps> = ({ control }) => {
  return (
    <div className={s.address}>
      <div className={s.addressTitle}>Address*</div>
      <div className={s.addressInputs}>
        <Controller
          name='address'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder='Street'
              id='street'
              required
              onChange={onChange}
              value={value}
              type='text'
              className={s.addressStreet}
            />
          )}
        />
        <Controller
          name='zip_code'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder='ZIP Code'
              id='zip'
              required
              onChange={onChange}
              value={value}
              type='text'
              className={s.addressZip}
            />
          )}
        />
        <Controller
          name='city'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder='City, Country'
              id='region'
              required
              onChange={onChange}
              value={value}
              type='text'
              className={s.addressRegion}
            />
          )}
        />
      </div>
      <span className={s.addressIcon1}>
        <PencilIcon />
      </span>
      <span className={s.addressIcon2}>
        <PencilIcon />
      </span>
    </div>
  )
}
