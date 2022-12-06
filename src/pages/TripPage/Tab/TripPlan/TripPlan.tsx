import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Button, TruncatedText } from 'components'

import { TripDestination } from 'shared/types/trip'
import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import s from './TripPlan.module.scss'

interface TripPlanProps {
  tripDestination: TripDestination[]
}

export const TripPlan: FC<TripPlanProps> = ({ tripDestination }) => {
  const { query, push } = useRouter()
  const { id } = query

  const handlePush = () => {
    push(`/trip_form/${id}`)
  }
  return (
    <div className={s.wrapper}>
      {tripDestination?.map(item => {
        return (
          <div className={s.card} key={item.id}>
            <div className={s.cardWrap}>
              <div className={s.destinationName}>{item.destination_name}</div>
              <TruncatedText
                className={s.description}
                limit={TRIP_PLAN_DESCRIPTION_SIZE}
              >
                {item.description}
              </TruncatedText>
            </div>

            <div className={s.image}>
              {item.images.length ? (
                <Image src={item.images[0]} layout={'fill'} />
              ) : null}
            </div>
          </div>
        )
      })}

      <div className={s.button}>
        <Button onClick={handlePush}>Start trip planning</Button>
      </div>
    </div>
  )
}
