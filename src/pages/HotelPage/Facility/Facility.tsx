import { FC } from 'react'
import Image from 'next/image'

import { Facility as FacilityTypes } from 'shared/types/hotel'

import s from './Facility.module.scss'

interface FacilityProps {
  facilitiesAndAmenities: FacilityTypes[]
}

export const Facility: FC<FacilityProps> = ({ facilitiesAndAmenities }) => {
  return (
    <div className={s.facility}>
      <div className={s.facilityTitle}>Facilities & Amenities</div>
      <div className={s.facilitySubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.facilityWrap}>
        {facilitiesAndAmenities?.map((item, index) => (
          <div key={index} className={s.facilityCard}>
            <Image
              src={item.image}
              alt={item.name + 'image'}
              width={33}
              height={33}
            />
            <div className={s.facilityCardTitle}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
