import { Button } from 'components/Button'
import { DownloadIcon } from 'components/icons'
import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { Radio } from 'components/Radio'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { sendDownloadBrochuresForm } from 'shared/api/routes/brochures'
import { titleOptions } from 'shared/constants/form'
import { loadBrochure } from 'shared/helpers/brochures'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { Brochure, DownloadBrochureForm } from 'shared/types/brochures'
import { getSelectedBrochuresIds } from 'store/slices/brochures/selector'
import { sendDownloadBrochureThunk } from 'store/slices/brochures/thunk'
import s from './DownloadBrochuresModal.module.scss'
import { Card } from './Сard'

interface DownloadBrochuresModalProps {
  isOpen: boolean
  brochures: Brochure[]
  onClose: () => void
}

export const DownloadBrochuresModal: FC<DownloadBrochuresModalProps> = ({
  isOpen,
  brochures,
  onClose,
}) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()
  const brochureIds = getSelectedBrochuresIds(brochures)
  const isFormSent = useAppSelector(state => state.brochures.isDownloadFormSent)

  useEffect(() => {
    if (isFormSent) {
      console.log(brochures)
      brochures.forEach((brochure) => {
        loadBrochure(brochure.file)
      })
      onClose()
    }
  }, [isFormSent])


  const onSubmit = (formData: any) => {
    // TODO add type
    const [first_name, last_name] = formData?.name.split(' ') ?? ['', ''];
    const form: DownloadBrochureForm = {
      first_name,
      last_name,
      title: formData.title.toLowerCase(),
      email: formData.email,
      brochures: brochureIds,
    }
    dispatch(sendDownloadBrochureThunk(form))
  }
  return (
    <Modal title='Downloading brochure' isOpen={isOpen} onClose={onClose}>
      <div className={s.container}>
        <div className={s.content}>
          <Card brochure={brochures[0]} />
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.title}>Contact info</div>
            <Controller
              name='email'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  id='email'
                  onChange={onChange}
                  value={value}
                  type='email'
                  label='Email'
                  classname={s.formName}
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
              name='name'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChange={onChange}
                  id='name'
                  value={value}
                  label='Fullname and surname'
                />
              )}
            />
            <div className={s.actions}>
              <Button onClick={onClose} variant='outline'>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                type='submit'
                classname={s.downloadBtn}
              >
                <span className={s.icon}>
                  <DownloadIcon />
                </span>
                <span
                  className={s.downloadText}
                >{`Download (${brochures?.length})`}</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
