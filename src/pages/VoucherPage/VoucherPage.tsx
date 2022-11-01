import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Step1Form } from './Step1Form'
import s from './VoucherPage.module.scss'
import bg from '/public/assets/images/voucher_bg.jpeg'
import Image from 'next/image'
import { ArrowIcon } from 'components/icons'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { Step2Form } from './Step2Form'
export enum Steps {
  FIRST,
  SECOND,
}
export const VoucherPage: FC = () => {
  const [step, setStep] = useState<Steps>(Steps.FIRST)
  return (
    <div className={s.container}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      {step === Steps.FIRST && <Step1Form setStep={setStep} />}
      {step === Steps.SECOND && <Step2Form setStep={setStep} />}
    </div>
  )
}
