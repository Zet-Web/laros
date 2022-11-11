import Image from 'next/image'
import { FC } from 'react'
import flight from '/public/assets/images/flight.svg?url'
export const FlightIcon: FC = () => {
  return (
    <>
      <Image src={flight} width={16} height={16} />
    </>
  )
}
