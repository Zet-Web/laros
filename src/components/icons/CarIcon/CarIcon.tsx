import Image from 'next/image'
import { FC } from 'react'
import car from '/public/assets/images/carIcon.svg?url'

export const CarIcon: FC = () => {
  return (
    <>
      <Image src={car} alt='icon' width={13} height={13} />
    </>
  )
}
