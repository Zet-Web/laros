import { ArrowIcon } from 'components/icons'
import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/voucher/voucher'
import { Steps } from '../VoucherPage'
import s from './Step2Form.module.scss'
import store from '/public/assets/images/voucherDelivery/store.svg?url'
import mail from '/public/assets/images/voucherDelivery/mail.svg?url'
import post from '/public/assets/images/voucherDelivery/post.svg?url'
import visa from '/public/assets/images/visa.svg?url'
import mastercard from '/public/assets/images/mastercard.svg?url'
import paypal from '/public/assets/images/paypal.svg?url'
import Image from 'next/image'
import cn from 'classnames'
import { VoucherDelivery } from 'shared/types/vouchers'
import { Input } from 'components/Input'
import { AddressInput } from 'features/AddressInput'
import { Button } from 'components/Button'
import { Select } from 'components/Select'
interface Step2FormProps {
  setStep: (step: Steps) => void
}
export const Step2Form: FC<Step2FormProps> = ({ setStep }) => {
  const { control, handleSubmit } = useForm()
  const { form, history } = useAppSelector(state => state.vouchers)
  const [deliveryOption, setDeliveryOption] = useState<VoucherDelivery>(
    history.delivery
  )
  const dispatch = useAppDispatch()

  const paymentOptions = [
    { value: 'visa', label: 'Visa', icon: visa },
    { value: 'mastercard', label: 'MasterCard', icon: mastercard },
    { value: 'paypal', label: 'Paypal', icon: paypal },
  ]

  const onSubmit: SubmitHandler<any> = async formData => {
    const finalData = {
      recepientEmail: formData.recepientEmail,
      deliveryType: deliveryOption,
      recepientAddress: {
        zip_code: formData.zip_code,
        street: formData.street,
        region: formData.region,
      },
    }
    dispatch(updateForm(finalData))
  }
  const selectPreviousAddress = () => {
    const prevAddress = {
      zip_code: history.zip,
      street: history.street,
      region: history.region,
    }
    dispatch(updateForm(prevAddress))
  }
  return (
    <div className={s.container}>
      <div className={s.nav} onClick={() => setStep(Steps.FIRST)}>
        <div className={s.arrow}>
          <ArrowIcon />
        </div>
        <div className={s.goBack}>Back to previous step</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.delivery}>
          <div className={s.title}>Delivery</div>
          <div className={s.deliveryDescription}>
            Choose your delivery option.
          </div>
          <div className={s.deliveryOptions}>
            <div
              onClick={() => setDeliveryOption(VoucherDelivery.STORE)}
              className={cn(s.deliveryOption, {
                [s.activeOption]: deliveryOption === VoucherDelivery.STORE,
              })}
            >
              <Image src={store} width={80} height={80} />
              <div className={s.deliveryOptionTitle}>LAROS Reisen Store</div>
            </div>
            <div
              onClick={() => setDeliveryOption(VoucherDelivery.POST)}
              className={cn(s.deliveryOption, {
                [s.activeOption]: deliveryOption === VoucherDelivery.POST,
              })}
            >
              <Image src={post} width={80} height={80} />
              <div className={s.deliveryOptionTitle}>Send to me via post</div>
            </div>
            <div
              onClick={() => setDeliveryOption(VoucherDelivery.EMAIL)}
              className={cn(s.deliveryOption, {
                [s.activeOption]: deliveryOption === VoucherDelivery.EMAIL,
              })}
            >
              <Image src={mail} width={80} height={80} />
              <div className={s.deliveryOptionTitle}>Send me via email</div>
            </div>
          </div>
        </div>
        {deliveryOption !== VoucherDelivery.EMAIL && (
          <div className={s.recepientSection}>
            <div className={s.description}>
              Enter recipient’s address and phone number
            </div>
            <AddressInput control={control} />
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
            <div className={s.previousBtn}>
              Or select{' '}
              <span onClick={selectPreviousAddress} className={s.highlight}>
                previous saved billing option
              </span>
            </div>
          </div>
        )}
        {deliveryOption === VoucherDelivery.EMAIL && (
          <div className={s.emailSection}>
            <div className={s.description}>
              Enter recipient’s email address and name
            </div>
            <Controller
              name='recepientEmail'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  classname={s.input}
                  placeholder='mail@mail.com'
                  required
                  shorten
                  type='email'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label='Email'
                />
              )}
            />
            {/* TODO check why didn't work: */}
            {history?.street && (
              <div className={s.previousBtn}>
                Or select{' '}
                <span onClick={selectPreviousAddress} className={s.highlight}>
                  previous saved billing option
                </span>
              </div>
            )}
          </div>
        )}
        <div className={s.paymentSection}>
          <div className={s.title}>Payment</div>
          <div className={s.decription}>Choose your option</div>
          <div className={s.selectDiv}>
            <div className={s.selectLabel}>At store</div>
            <Controller
              name='payment'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  options={paymentOptions}
                  onChange={onChange}
                  value={value}
                  classname={s.select}
                />
              )}
            />
          </div>
        </div>
        <div className={s.termsSection}>
          <div className={s.title}>Terms of use</div>
          <ul className={s.list}>
            <li className={s.termsItem}>Minimum voucher value CHF 50</li>
            <li className={s.termsItem}>Validity 1 tear from date of issue</li>
            <li className={s.termsItem}>
              Cash payment, exchange and subsequent redemption for trips already
              booked are excluded.
            </li>
          </ul>
        </div>
        <div className={s.shippingSection}>
          <div className={s.title}>Shipping voucher’s & invoice</div>
          <ul className={s.list}>
            <li className={s.termsItem}>
              Dispatch of voucher(s): after receipt of the invoice amount
            </li>
            <li className={s.termsItem}>
              Dispatch of the invoice: the invoice will be sent to you
              separately by email from the selected branch after you have sent
              off the order form.
            </li>
            <li className={s.termsItem}>
              Validity: The voucher can be redeemed after receipt of the invoice
              amount.
            </li>
          </ul>
        </div>
        <Button onClick={handleSubmit(onSubmit)} classname={s.submitBtn}>
          Done
        </Button>
      </div>
    </div>
  )
}
