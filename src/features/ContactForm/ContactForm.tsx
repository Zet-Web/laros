import { FC } from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import cn from 'classnames'
import { sendContactFormThunk } from 'store/slices/contactForm/thunk'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Radio } from 'components/Radio'

import { titleOptions } from 'shared/constants/form'
import { useAppDispatch } from 'shared/hooks/redux'
import { ContactForm as ContactFormData } from 'shared/types/contact'

import fb from '/public/assets/images/socials/facebook.svg?url'
import inst from '/public/assets/images/socials/instagram.svg?url'
import linked from '/public/assets/images/socials/linkedin.svg?url'
import map from '/public/assets/images/info/map.svg?url'
import userPlus from '/public/assets/images/info/user-plus.svg?url'
import send from '/public/assets/images/info/send.svg?url'
import video from '/public/assets/images/info/video.svg?url'

import s from './ContactForm.module.scss'
import { InputCalendar } from 'components/InputCalendar'

type ContactFormProps = {
  contactPage?: boolean
}

export const ContactForm: FC<ContactFormProps> = ({ contactPage }) => {
  const { handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()

  const onSubmit = (formData: any) => {
    // TODO add types
    const form: ContactFormData = {
      ...formData,
    }

    dispatch(sendContactFormThunk(form as ContactFormData))
  }
  return (
    <div className={cn(s.container, { [s.contactContainer]: contactPage })}>
      <div className={cn(s.main, { [s.contactMain]: contactPage })}>
        <div className={s.title}>
          {contactPage ? 'Contact us' : 'Send us a message'}
        </div>
        <div className={s.description}>
          In elit volutpat, quam egestas vel ut non. Maecenas sodales amet,
          aliquam, nisl semper justo, vitae enim tortor.
        </div>
        <div className={s.form}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Name'
                onChange={onChange}
                id='name'
                value={value}
                label={'Name & Surname:'}
              />
            )}
          />
          <Controller
            name='title'
            control={control}
            rules={{ required: true }}
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
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                type='email'
                placeholder='Email'
                onChange={onChange}
                id='email'
                value={value}
                label='Email'
              />
            )}
          />

          {contactPage ? (
            <Controller
              name='phone'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  type='phone'
                  placeholder=''
                  onChange={e => onChange(e)}
                  id='phone'
                  value={value}
                  label='Phone number:'
                />
              )}
            />
          ) : (
            <Controller
              name='number'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  type='number'
                  placeholder=''
                  onChange={e => onChange(Number(e))}
                  id='number'
                  value={value}
                  label='Exact trip days:'
                />
              )}
            />
          )}
          {contactPage ? null : (
            <>
              <Controller
                name='depature'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCalendar
                    onChange={e => onChange(e)}
                    value={value}
                    label='Earliest depature'
                  />
                )}
              />
              <Controller
                name='return'
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputCalendar
                    onChange={e => onChange(e)}
                    value={value}
                    label='Earliest return:'
                  />
                )}
              />
            </>
          )}

          <Controller
            name='message'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Tap to add'
                onChange={onChange}
                id='number'
                value={value}
                label='Your message:'
              />
            )}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            variant='secondary'
            classname={cn(s.sendBtn, { [s.contactBtn]: contactPage })}
          >
            Send
          </Button>
        </div>
      </div>
      <div className={cn(s.info, { [s.contactInfo]: contactPage })}>
        <div className={cn(s.infoItem, s.appointment)}>
          <div className={s.infoIcon}>
            <Image src={video} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Book a video appointment</div>
          <div className={s.infoDescription}>
            Choose the date & time and let’s talk!
          </div>
        </div>
        <div className={cn(s.infoItem, s.addressTime)}>
          <div className={s.infoIcon}>
            <Image src={map} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Address and working hours</div>
          <div
            className={s.infoDescription}
          >{`Hauptstrasse 94,\nCH-4147 Aesch\n\nMo: 14:00 - 17:00\nTu-Fr: 10:00 - 12:00 and 14:00 - 17:00s`}</div>
        </div>
        <div className={cn(s.infoItem, s.contacts)}>
          <div className={s.infoIcon}>
            <Image src={send} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Phone and email</div>
          <div className={s.infoDescription}>
            <a href='tel:+410617568080' className={s.phone}>
              + 41 061 / 756 80 80
            </a>
            {`\n\n`}
            <a href='mailto:info@laros.ch' className={s.mail}>
              info@laros.ch
            </a>
          </div>
        </div>
        <div className={cn(s.infoItem, s.socials)}>
          <div className={s.infoIcon}>
            <Image src={userPlus} width={32} height={32} />
          </div>
          <div className={s.infoTitle}>Social media</div>
          <div className={s.infoDescription}>Follow us on:</div>
          <div className={s.socialIcons}>
            <div>
              <Image src={inst} width={20} height={20} />
            </div>
            <div>
              <Image src={fb} width={20} height={20} />
            </div>
            <div>
              <Image src={linked} width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
