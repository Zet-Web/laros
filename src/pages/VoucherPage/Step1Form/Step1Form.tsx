import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input, Radio } from 'components'
import { AddressInput } from 'features'
import { Steps } from '../VoucherPage'

import { sendContactFormThunk } from 'store/slices/voucher/thunk'
import { useAppDispatch } from 'shared/hooks/redux'

import { titleOptions } from 'shared/constants/form'

import s from './Step1Form.module.scss'

interface Step1FormProps {
  setStep: (step: Steps) => void
}

export const Step1Form: FC<Step1FormProps> = ({ setStep }) => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<any> = formData => {
    window.scrollTo(0, 0)
    setStep(Steps.SECOND)
    dispatch(sendContactFormThunk(formData))
  }

  return (
    <div className={s.container}>
      <div className={s.intro}>
        <div className={s.introTitle}>Gift vouchers</div>

        <div className={s.introDescription}>
          Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat
          morbi proin. Massa quis montes, scelerisque commodo elit erat in urna
          id. Purus sit odio egestas venenatis viverra blandit amet vitae.
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.voucherSection}>
          <div className={s.title}>Voucher</div>

          <div className={s.voucherInputs}>
            <div className={s.selectDiv}>
              <Controller
                name='name'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    classname={s.inputVoucherName}
                    required
                    shorten
                    placeholder='Name'
                    onChange={onChange}
                    id='name'
                    value={value}
                    label='Select a voucher or a gift card'
                  />
                )}
              />
            </div>

            <Controller
              name='value'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  required
                  shorten
                  placeholder='50'
                  type='number'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label='Enter the value of the voucher. Must be more than 50 CHF'
                  classname={s.price}
                />
              )}
            />
          </div>
        </div>

        <div className={s.billingSection}>
          <div className={s.title}>Billing person details</div>

          <div className={s.billingDescription}>
            Please, share with us the information about the person who sends the
            gift card. No personal information won&apos;t be provided to any
            third parties.
          </div>

          <Controller
            name='sender'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder='Name'
                onChange={onChange}
                id='name'
                value={value}
                label='Name & Surname'
              />
            )}
          />

          <Controller
            name='title'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={s.radio}>
                <div className={s.radioLabel}>Salutation*</div>
                <Radio
                  name='title'
                  onChange={onChange}
                  value={value}
                  options={titleOptions}
                />
              </div>
            )}
          />

          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder='Email'
                type='email'
                onChange={onChange}
                id='name'
                value={value}
                label='Email'
              />
            )}
          />

          <Controller
            name='company'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                shorten
                placeholder='e. g. Tesla'
                onChange={onChange}
                id='name'
                value={value}
                label='Company (optional)'
              />
            )}
          />

          <Controller
            name='phone'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                placeholder='+ 42 123 - 45- 67'
                required
                shorten
                type='phone'
                onChange={onChange}
                id='name'
                value={value}
                label='Phone number'
              />
            )}
          />

          <AddressInput control={control} />
        </div>

        <div className={s.recipientSection}>
          <div className={s.title}>Recipient Name</div>

          <Controller
            name='recipient'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder='Name'
                onChange={onChange}
                id='name'
                value={value}
                label='Name & Surname'
              />
            )}
          />
        </div>

        <div className={s.fromSection}>
          <div className={s.title}>Voucher from</div>

          <Controller
            name='from'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.input}
                required
                shorten
                placeholder='Name'
                onChange={onChange}
                id='name'
                value={value}
                label='Name & Surname of the recipient'
              />
            )}
          />
        </div>

        <Button onClick={handleSubmit(onSubmit)} classname={s.nextBtn}>
          Next
        </Button>
      </div>
    </div>
  )
}
