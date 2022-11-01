import Image from 'next/image'
import { FC } from 'react'
import pencil from '/public/assets/images/pencil.svg'
export const PencilIcon: FC = () => {
  return (
    <>
      <Image src={pencil} width={13} height={13} />
    </>
  )
}
