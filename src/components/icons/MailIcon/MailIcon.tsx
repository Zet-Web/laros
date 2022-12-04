import Image from 'next/image'
import { FC } from 'react'
import mail from '/public/assets/images/mailInput.svg?url'

export const MailIcon: FC = () => {
  return (
    <>
      <Image src={mail} width={20} height={15} alt='mail icon' />
    </>
  )
}
