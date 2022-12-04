import { FC } from 'react'
import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFormWatch,
} from 'react-hook-form'
import cn from 'classnames'

import { Input,TrashIcon,Button,Select } from 'components'

import { FlightRequestFormType } from '../../../pages/FlightRequestPage'

import s from '../TravellerForm.module.scss'
import s1 from '../../../pages/FlightRequestPage/FlightRequestPage.module.scss'

export interface TravellerAddressForm {
  country: { label: string; value: string }
  city: string
  address1: string
  address2: string
  zip: number
}

interface TravellerAddressFormProps {
  index: number
  control: Control<TravellerAddressForm & FlightRequestFormType>
  field: FieldArrayWithId
  setAddress: (index: number, address: string) => void
  hideRightAddressForm?: () => void
  cancelButton?: boolean
  watch: UseFormWatch<TravellerAddressForm & FlightRequestFormType>
  right?: boolean
}

export const TravellerAddressForm: FC<TravellerAddressFormProps> = ({
  index,
  control,
  field,
  setAddress,
  hideRightAddressForm,
  cancelButton,
  watch,
  right,
}) => {
  const saveAddress = () => {
    const country = watch('country')
    const city = watch('city') ?? ''
    const address1 = watch('address1') ?? ''
    const address2 = watch('address2') ?? ''
    const zip = watch('zip') ?? ''
    const address = `${address1} ${address2} ${zip} ${city} ${country.value}`
    setAddress(index, address)
  }

  return (
    <div className={s.travellerAddressWrapper}>
      <div className={cn(s.radioLabel, s.addressRadioLabel)}>
        <div>{right ? 'Address #2' : 'Address #1'}</div>
        <Button onClick={hideRightAddressForm} classname={s.deleteButton}>
          <TrashIcon />
        </Button>
      </div>

      <div className={s1.selectWrapper}>
        <div className={s1.selectLabel}>Country</div>
        <Controller
          name='country'
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              classname={s.select}
              onChange={onChange}
              options={[
                { label: 'Russia', value: 'Russia' },
                { label: 'Georgia', value: 'Georgia' },
              ]}
            />
          )}
        />
      </div>

      <Controller
        name='city'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            classname={s.input}
            placeholder={'Tap to add'}
            onChange={onChange}
            value={value}
            label='City'
          />
        )}
      />

      <Controller
        name='address1'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            classname={s.input}
            placeholder={'Tap to add'}
            onChange={onChange}
            value={value}
            label='Address line 1'
          />
        )}
      />

      <Controller
        name='address2'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            classname={s.input}
            placeholder={'Tap to add'}
            onChange={onChange}
            value={value}
            label='Address line 2'
          />
        )}
      />

      <Controller
        name='zip'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...field}
            type='number'
            classname={s.input}
            placeholder={'Tap to add'}
            onChange={onChange}
            value={value}
            label='Zip code'
          />
        )}
      />

      <div className={s.buttons}>
        <Button classname={s.saveButton} onClick={saveAddress}>
          Save
        </Button>
        {cancelButton && (
          <Button onClick={hideRightAddressForm} classname={s.cancelButton}>
            Cancel
          </Button>
        )}
      </div>
    </div>
  )
}
