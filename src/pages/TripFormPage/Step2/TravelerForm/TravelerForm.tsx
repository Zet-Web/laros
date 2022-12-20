import { UserIcon } from 'components'
import { Input } from 'components/Input'
import { InputCalendar } from 'components/InputCalendar'
import { Radio } from 'components/Radio'
import { Select } from 'components/Select'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { genderOptions, titleOptions } from 'shared/constants/form'
import s from './TravelerForm.module.scss'
import { useTranslate } from '../../../../shared/hooks/useTranslate'
interface TravelerFormProps {
  control: any
  index: number
}
export const TravelerForm: FC<TravelerFormProps> = ({ control, index }) => {
  const t = useTranslate()

  return (
    <div className={s.container}>
      <div className={s.title}>
        <span className={s.icon}>
          <UserIcon />
        </span>
        {t('common.traveler')} {index}:
      </div>
      <div className={s.form}>
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
              <div className={s.radioLabel}>{t('contactForm.label1')}*</div>
              <Radio
                name='salutation*'
                onChange={onChange}
                value={value}
                options={titleOptions}
              />
            </div>
          )}
        />
        <div className={s.select}>
          <div className={s.selectLabel}>{t('worldwideTours.label8')}*</div>
          <Controller
            name='nationality'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select onChange={onChange} value={value} options={[]} />
            )}
          />
        </div>
        <Controller
          name='gender'
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className={s.radio}>
              <div className={s.radioLabel}>{t('worldwideTours.label9')}</div>
              <Radio
                name='gender'
                onChange={onChange}
                value={value}
                options={genderOptions}
              />
            </div>
          )}
        />
        <Controller
          name='birth_date'
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className={s.date}>
              <InputCalendar
                label={t('worldwideTours.label10')}
                onChange={onChange}
                value={value}
              />
            </div>
          )}
        />
      </div>
    </div>
  )
}
