import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button, PencilIcon, Input, Modal, Radio } from 'components'
import { Card } from './Card'

import { useAppDispatch } from 'shared/hooks/redux'
import { getSelectedBrochuresIds } from 'store/slices/brochures/selector'
import { sendSendBrochureThunk } from 'store/slices/brochures/thunk'

import { useTranslate } from 'shared/hooks/useTranslate'

import { titleOptions } from 'shared/constants/form'

import { Brochure, SendBrochureForm } from 'shared/types/brochures'

import s from './SendBrochuresModal.module.scss'

interface SendBrochuresModalProps {
  brochures: Brochure[]
  isOpen: boolean
  onClose: () => void
}
export const SendBrochuresModal: FC<SendBrochuresModalProps> = ({
  brochures,
  isOpen,
  onClose,
}) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()
  const t = useTranslate()

  const brochureIds = getSelectedBrochuresIds(brochures)

  const onSubmit = (formData: any) => {
    // TODO add type
    const form: SendBrochureForm = {
      ...formData,
      brochures: brochureIds,
    }
    dispatch(sendSendBrochureThunk(form as SendBrochureForm))
  }

  return (
    <Modal title={t('brochures.modalTitle')} isOpen={isOpen} onClose={onClose}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.title}>{t('brochures.selected')}:</div>
          <div className={s.list}>
            {brochures.map(brochure => (
              <Card key={brochure.id} brochure={brochure} />
            ))}
          </div>
          <form className={s.form}>
            <div className={s.formTitle}>{t('brochures.info')}</div>

            <Controller
              name='full_name'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Name'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label={t('forms.inputLabel30')}
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
                    name='title'
                    onChange={onChange}
                    value={value}
                    options={titleOptions}
                  />
                </div>
              )}
            />
            <div className={s.address}>
              <div className={s.adressTitle}>{t('forms.label7')}*</div>
              <div className={s.adressInputs}>
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
                      className={s.adressStreet}
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
                      className={s.adressZip}
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
            <Controller
              name='number'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  id='number'
                  required
                  onChange={onChange}
                  value={value}
                  type='phone'
                  label={t('forms.inputLabel6')}
                  classname={s.formName}
                />
              )}
            />
            <div className={s.actions}>
              <Button onClick={onClose} variant='outline'>
                {t('brochures.cancel')}
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                type='submit'
                classname={s.downloadBtn}
              >
                {t('brochures.buttonSend')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
