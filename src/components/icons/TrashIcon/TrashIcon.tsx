import Image from 'next/image'
import { FC } from 'react'
import trash from '/public/assets/images/Trash.svg?url'

export const TrashIcon: FC = () => {
  return (
    <>
      <Image src={trash} width={24} height={24} />
    </>
  )
}
