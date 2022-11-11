import Image from 'next/image'
import { FC } from 'react'
import confirm from '/public/assets/images/confirmIcon.svg?url'

export const ConfirmIcon: FC = () => {
  return (
    <>
      <Image src={confirm} alt='icon' width={13} height={13} />
    </>
  )
}
