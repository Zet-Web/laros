import Image from 'next/image'
import { FC } from 'react'
import pin from '/public/assets/images/map-pin.svg'

export const PinIcon: FC = () => {
  return (
    <>
      <Image src={pin} width={13} height={13} />
    </>
  )
}
