import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { PencilIcon } from 'components'

import s from './AddressInput.module.scss'
import { useTranslate } from '../../shared/hooks/useTranslate'
interface AddressInputProps {
  control: Control
}

export const AddressInput: FC<AddressInputProps> = ({ control }) => {
  const t = useTranslate()

  return (
    <div className={s.address}>
      <div className={s.addressTitle}>{t('vouchers.label7')}*</div>
      <div className={s.addressInputs}>
        <Controller
          name='address'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              placeholder={t('vouchers.placeholder4')}
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
              placeholder={t('vouchers.placeholder6')}
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
              placeholder={t('vouchers.placeholder5')}
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
