import { FC, memo, useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Modal, Button, Input, Select } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import upload from '/public/assets/images/upload.svg'
import { Vacancy } from 'shared/types/vacancy'
import { Option } from 'shared/types'
import { applyForVacancy } from 'shared/api/routes/vacancy'

import s from './ApplyModal.module.scss'

interface ApplyModalProps {
  position: number | null
  isOpen: boolean
  title?: string
  onClose: () => void
  className?: string
  vacancies: Vacancy[]
}

interface ApplyForm {
  position: Option
  name: string
  phone: string
  email: string
  file: File
}

const ApplyModal: FC<ApplyModalProps> = ({
  vacancies,
  position,
  isOpen,
  title,
  className,
  onClose,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ApplyForm>()
  const [positions, setPositions] = useState<Option[]>([])
  const t = useTranslate()

  const onSubmit: SubmitHandler<ApplyForm> = data => {
    applyForVacancy(Number(data.position.value), {
      name: data.name,
      file: data.file,
      email: data.email,
      phone: data.phone,
    })

    onClose()

    reset()
  }

  useEffect(() => {
    setPositions(
      vacancies.map(vacancy => ({
        label: vacancy.name,
        value: vacancy.id.toString(),
        icon: '',
      }))
    )
  }, [vacancies])

  useEffect(() => {
    const currentVacancy = vacancies.find(item => item.id == position)

    if (currentVacancy) {
      setValue('position', {
        value: currentVacancy.id.toString(),
        icon: '',
        label: currentVacancy.name,
      })
    }
  }, [position])

  return (
    <Modal
      title={title}
      classname={className}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={s.applyModal}>
        <Controller
          name='position'
          control={control}
          render={({ field }) => (
            <Select classname={s.select} options={positions} {...field} />
          )}
        />

        <div className={s.contacts}>
          <h2 className={s.contactTitle}>{t('aboutModal.info')}</h2>
          <Controller
            name='name'
            defaultValue=''
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                shorten
                required
                id='name'
                classname={cn(s.input, errors.name && s.error)}
                label={t('forms.inputLabel5')}
                {...field}
              />
            )}
          />
          <div className={s.flex}>
            <Controller
              name='email'
              defaultValue=''
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  shorten
                  required
                  id='name'
                  withCounter
                  type='email'
                  classname={cn(s.input, errors.email && s.error)}
                  label={t('forms.inputLabel1')}
                  {...field}
                />
              )}
            />
            <Controller
              name='phone'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input
                  shorten
                  id='name'
                  classname={s.input}
                  type='phone'
                  label={t('forms.inputLabel6')}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className={s.wrapperSending}>
          <div className={s.wrapperCv}>
            <p className={s.cv}>{t('aboutModal.cv')}</p>
            <label className={s.label}>
              <input
                accept='.doc, .docx, .pdf'
                type='file'
                className={s.fileInput}
                {...register('file')}
              />

              <span className={s.title}>
                <Image alt='uploadIcon' src={upload} />
                <span className={s.text}>
                  {getValues().phone
                    ? getValues().phone
                    : t('aboutModal.upload')}
                </span>
              </span>
            </label>

            <p className={s.fileTypes}>DOC, DOCX, PDF (2MB)</p>
          </div>

          <div className={s.buttons}>
            <Button variant='outline' onClick={onClose}>
              {t('aboutModal.cancel')}
            </Button>

            <Button
              onClick={handleSubmit(onSubmit)}
              variant='primary'
              type='submit'
            >
              {t('aboutModal.submit')}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default memo(ApplyModal)
