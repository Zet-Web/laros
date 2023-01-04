import { Button, WarningIcon } from 'components'
import { Input } from 'components/Input'
import { Radio } from 'components/Radio'
import { Select } from 'components/Select'
import Link from 'next/link'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { booleanOptions, titleOptions } from 'shared/constants/form'
import { useAppDispatch } from 'shared/hooks/redux'
import { Country } from 'shared/types/country'
import { Steps } from '../TripFormPage'
import s from './Step2.module.scss'
import { TravelerForm } from './TravelerForm'
import { useTranslate } from '../../../shared/hooks/useTranslate'

interface Step2Props {
  setStep: (step: Steps) => void
  countries: Country[]
}

export const Step2: FC<Step2Props> = ({ setStep }) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()
  const travelers = [1, 2]
  const onSubmit = (formData: any) => {
    // TODO add type
    const [name, surname] = formData.full_name.split(' ')
    const finalForm = { ...formData, name, surname, full_name: undefined }
    console.log(finalForm)
  }
  const t = useTranslate()

  return (
    <div className={s.container}>
      <div className={s.contactSection}>
        <div className={s.contactTitle}>{t('tripSteps.contactInfo')}</div>
        <div className={s.contactForm}>
          <Controller
            name='full_name'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('vouchers.placeholder1')}
                onChange={onChange}
                id='name'
                value={value}
                label={t('forms.inputLabel5')}
                shorten
              />
            )}
          />
          <Controller
            name='title'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={s.radio}>
                <div className={s.radioLabel}>
                  {t('contactForm.buttonSave')}*
                </div>
                <Radio
                  name='title*'
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
                placeholder={t('forms.email3')}
                onChange={onChange}
                value={value}
                label={t('forms.inputLabel1')}
                shorten
              />
            )}
          />
          <Controller
            name='phone'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='+41'
                onChange={onChange}
                value={value}
                type='phone'
                label={t('forms.inputLabel24')}
                shorten
              />
            )}
          />
          <div className={s.select}>
            <div className={s.selectLabel}>{t('forms.inputLabel25')}*</div>
            <Controller
              name='country'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select onChange={onChange} value={value} options={[]} />
              )}
            />
          </div>
          <div className={s.select}>
            <div className={s.selectLabel}>{t('forms.inputLabel26')}*</div>
            <Controller
              name='city'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  options={[]}
                  classname={s.selectField}
                />
              )}
            />
          </div>
          <Controller
            name='address'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('worldwideTours.label12')}
                onChange={onChange}
                value={value}
                label={`${t('forms.inputLabel27')} 1`}
                required
                shorten
              />
            )}
          />
          <Controller
            name='address_2'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('worldwideTours.label12')}
                onChange={onChange}
                value={value}
                label={`${t('forms.inputLabel27')} 2`}
                shorten
              />
            )}
          />
          <Controller
            name='zip_code'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('worldwideTours.label12')}
                onChange={onChange}
                value={value}
                label={t('forms.inputLabel28')}
                required
                shorten
              />
            )}
          />
        </div>
        <div className={s.travelsSection}>
          <div className={s.travelersForm}>
            {travelers.map((traveler, index) => (
              <TravelerForm key={index} control={control} index={index + 1} />
            ))}
          </div>
        </div>
        <div className={s.messageSection}>
          <Controller
            name='comment'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={t('worldwideTours.label12')}
                onChange={onChange}
                value={value}
                label={t('forms.inputLabel7')}
                shorten
                classname={s.messageInput}
              />
            )}
          />
        </div>
        <div className={s.agentSection}>
          <Controller
            name='is_travel_agent'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={s.agentRadio}>
                <div className={s.agentLabel}>{t('common.travelAgent')}?</div>
                <Radio
                  name='agent'
                  onChange={onChange}
                  value={value}
                  options={booleanOptions}
                />
              </div>
            )}
          />
        </div>
        <div className={s.actions}>
          <Button onClick={handleSubmit(onSubmit)}>
            {t('worldwideTours.submitButton')}
          </Button>
          <Button variant='outline'>{t('changingLocation.cancel')}</Button>
        </div>
        <div className={s.terms}>
          {t('worldwideTours.Privacy1')}{' '}
          <span className={s.link}>
            <Link href='/terms/3'>{t('worldwideTours.Privacy2')}</Link>
          </span>{' '}
          {t('worldwideTours.Privacy3')}{' '}
          <span className={s.link}>
            <Link href='/terms/4'>{t('worldwideTours.Privacy4')}</Link>
          </span>
        </div>
        <div className={s.warning}>
          <WarningIcon />{' '}
          <div className={s.warningText}>{t('tripSteps.warning')}</div>
        </div>
      </div>
    </div>
  )
}
