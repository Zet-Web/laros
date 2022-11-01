import Image from 'next/image'
import { FC } from 'react'
import geo from '/public/assets/images/geoTagIcon.png'

export const GeoTagIcon: FC = () => {
  return (
    <>
      <Image src={geo} alt='icon' width={13} height={13} />
    </>
  )
}
