import Image from 'next/image'
import { FC } from 'react'
import add from '/public/assets/images/PlusSquareFill.svg?url'

export const AddIcon: FC = () => {
  return (
    <>
      <Image src={add} width={20} height={20} />
    </>
  )
}
