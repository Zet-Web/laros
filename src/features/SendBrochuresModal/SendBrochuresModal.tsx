import { Button } from 'components/Button'
import { PencilIcon } from 'components/icons'
import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { Radio } from 'components/Radio'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { titleOptions } from 'shared/constants/form'
import { useAppDispatch } from 'shared/hooks/redux'
import { Brochure, SendBrochureForm } from 'shared/types/brochures'
import { getSelectedBrochuresIds } from 'store/slices/brochures/selector'
import { sendSendBrochureThunk } from 'store/slices/brochures/thunk'
import { Card } from './Card'
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
    <Modal title='Sending you our brochure' isOpen={isOpen} onClose={onClose}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.title}>You selected:</div>
          <div className={s.list}>
            {brochures.map(brochure => (
              // @ts-ignore
              <Card key={brochure} brochure={brochure} />
            ))}
          </div>
          <form className={s.form}>
            <div className={s.formTitle}>Contact info</div>

            <Controller
              name='full_name'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Name'
                  onChange={onChange}
                  id='name'
                  value={value}
                  label='Fullname and surname'
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
            <div className={s.address}>
              <div className={s.adressTitle}>Address*</div>
              <div className={s.adressInputs}>
                <Controller
                  name='address'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <input
                      placeholder='Street'
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
                      placeholder='ZIP Code'
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
                      placeholder='City, Country'
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
                  label='Phone number'
                  classname={s.formName}
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
                send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
