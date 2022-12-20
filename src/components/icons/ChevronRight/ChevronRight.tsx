import Image from 'next/image'
import { FC } from 'react'
import chevron from '/public/assets/images/chevron-right.svg?url'

export const ChevronRightIcon: FC = () => {
  return (
    <>
      <Image src={chevron} alt='icon' width={13} height={13} />
    </>
  )
}
