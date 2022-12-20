import { FC } from 'react'
import Image from 'next/image'

import { Facility as FacilityTypes } from 'shared/types/hotel'

import s from './Facility.module.scss'
import { useTranslate } from '../../../shared/hooks/useTranslate'

interface FacilityProps {
  facilitiesAndAmenities: FacilityTypes[]
}

export const Facility: FC<FacilityProps> = ({ facilitiesAndAmenities }) => {
  const t = useTranslate()

  return (
    <div className={s.facility}>
      <div className={s.facilityTitle}>{t('hotel.facilitiesTitle')}</div>
      <div className={s.facilitySubTitle}>{t('hotel.facilitiesSubTitle')}</div>

      <div className={s.facilityWrap}>
        {facilitiesAndAmenities?.map((item, index) => (
          <div key={index} className={s.facilityCard}>
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name + 'image'}
                width={33}
                height={33}
              />
            ) : null}

            <div className={s.facilityCardTitle}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
