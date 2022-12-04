import Image from 'next/image'
import { FC } from 'react'
import traveller from '/public/assets/images/destinations/traveller.svg?url'

export const TravellerIcon: FC = () => {
  return (
    <>
      <Image src={traveller} width={16} height={16} alt='traveller icon' />
    </>
  )
}
