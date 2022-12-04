import Image from 'next/image'
import { FC } from 'react'
import add from '/public/assets/images/greyPlus.svg?url'

export const AddIconGrey: FC = () => {
  return (
    <>
      <Image src={add} width={24} height={24} />
    </>
  )
}
