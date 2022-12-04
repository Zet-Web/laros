import { FC, useState } from 'react'
import cn from 'classnames'

import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFormWatch,
} from 'react-hook-form'

import {
  Button,
  TravellerIcon,
  Input,
  Select,
  Radio,
  InputCalendar,
  TrashIcon,
  AddIconGrey,
} from 'components'
import { TravellerAddressForm } from './TravellerAddressForm/TravellerAddressForm'

import { genderOptions } from 'shared/constants/form'

import { metaToOption } from 'shared/helpers/select'

import { Meta } from 'shared/types'
import { FlightRequestFormType } from 'pages/FlightRequestPage'

import s from './TravellerForm.module.scss'

interface TravellerFormProps {
  field: FieldArrayWithId
  index: number
  control: Control<TravellerAddressForm & FlightRequestFormType>
  watch: UseFormWatch<TravellerAddressForm & FlightRequestFormType>
  countries: Meta[]
}

export const TravellerForm: FC<TravellerFormProps> = ({
  field,
  index,
  control,
  watch,
  countries,
}) => {
  const [addresses, setAddresses] = useState<string[]>([])
  const [showAddressInput, setShowAddressInput] = useState<boolean>(false)
  const MAX_ADDRESSES_LIMIT = 2
  const setAddress = (i: number, address: string) => {
    if (i === index && address) {
      setAddresses([...addresses, address])
    }
  }

  const hideRightAddressForm = () => {
    setShowAddressInput(false)
  }

  return (
    <li key={field.id} className={s.travellerForm}>
      <div className={s.travellerFormHeader}>
        <div className={s.travellerIcon}>
          <TravellerIcon />
        </div>
        <div className={s.travellerNumber}>{`Traveller ${index + 1}`}:</div>
      </div>
      <div className={s.row}>
        <Controller
          name={`travellers.${index}.name`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              {...field}
              classname={s.input}
              placeholder={'Tap to add'}
              onChange={onChange}
              value={value}
              label='Name and Surname'
            />
          )}
        />

        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>Nationality</div>
          <Controller
            name={`travellers.${index}.nationality`}
            control={control}
            render={({ field: { onChange } }) => (
              <Select
                {...field}
                classname={s.select}
                onChange={onChange}
                options={metaToOption(countries)}
              />
            )}
          />
        </div>
      </div>
      <div className={s.row}>
        <Controller
          name={`travellers.${index}.gender`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className={s.radio}>
              <div className={s.radioLabel}>Gender</div>
              <Radio
                {...field}
                name={`travellers.${index}.gender`}
                onChange={onChange}
                value={value}
                options={genderOptions}
              />
            </div>
          )}
        />
      </div>
      <div className={cn(s.row, s.rowBirth)}>
        <Controller
          name={`travellers.${index}.birth`}
          control={control}
          render={({ field: { onChange } }) => (
            <InputCalendar
              error={false}
              handleIconClick={() => {}}
              {...field}
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={'Date of birth'}
            />
          )}
        />
      </div>
      {Boolean(addresses.length) && (
        <div
          className={cn(
            addresses.length === MAX_ADDRESSES_LIMIT || showAddressInput
              ? s.row
              : ''
          )}
        >
          {addresses.map(address => (
            <div key={addresses.indexOf(address)}>
              <Controller
                name={`travellers.${index}.address`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div className={cn(s.radio, s.addressRadio)}>
                    <div className={cn(s.radioLabel, s.addressRadioLabel)}>
                      <div>{`Address #${addresses.indexOf(address) + 1}`}</div>
                      <Button
                        onClick={() => {
                          setShowAddressInput(false)
                          setAddresses(
                            addresses.filter(item => item != address)
                          )
                        }}
                        classname={s.deleteButton}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                    <Radio
                      {...field}
                      name={`travellers.${index}.address`}
                      onChange={onChange}
                      value={value}
                      options={[{ label: address, value: address }]}
                    />
                  </div>
                )}
              />
            </div>
          ))}
          {addresses.length === 1 && !showAddressInput && (
            <Button
              classname={s.addAnotherAddressButton}
              onClick={() => setShowAddressInput(true)}
            >
              <AddIconGrey />
              <span className={s.buttonText}>Add another address</span>
            </Button>
          )}
          {showAddressInput && addresses.length === 1 && (
            <div className={s.rightAddress}>
              <TravellerAddressForm
                right
                cancelButton
                field={field}
                index={index}
                control={control}
                watch={watch}
                setAddress={setAddress}
                hideRightAddressForm={hideRightAddressForm}
              />
            </div>
          )}
        </div>
      )}

      {/*If we don't have any addresses*/}
      {!addresses.length && (
        <div>
          <TravellerAddressForm
            watch={watch}
            control={control}
            field={field}
            index={index}
            setAddress={setAddress}
          />
        </div>
      )}
    </li>
  )
}
