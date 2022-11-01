import Image from 'next/image'
import { FC } from 'react'
import arrow from '/public/assets/images/arrowBrochure.svg'

export const ArrowIcon: FC = () => {
  return (
    <>
      <Image src={arrow} width={13} height={13} alt='arrow icon' />
    </>
  )
}
