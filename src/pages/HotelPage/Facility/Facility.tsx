import React, { FC } from 'react'

import s from './Facility.module.scss'
import { FacilityIcon } from '../../../components/icons/Facility'
import { FacilityType } from '../../../shared/types/hotelPage'

interface FacilityProps {
  facilitiesAndAmenities: FacilityType[]
}

export const Facility: FC<FacilityProps> = ({ facilitiesAndAmenities }) => {
  return (
    <div className={s.Facility}>
      <div className={s.FacilityTitle}>Facilities & Amenities</div>
      <div className={s.FacilitySubTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.FacilityWrap}>
        {facilitiesAndAmenities.map((item, index) => (
          <div key={index} className={s.FacilityCard}>
            <FacilityIcon variant={item.id} />
            <div className={s.FacilityCardTitle}>{item.facility}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
