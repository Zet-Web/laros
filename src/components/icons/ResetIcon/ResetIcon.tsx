import Image from 'next/image'
import { FC } from 'react'
import reset from '/public/assets/images/ArrowCounterclockwise.svg?url'

export const ResetIcon: FC = () => {
  return (
    <>
      <Image src={reset} alt='icon' width={13} height={13} />
    </>
  )
}
