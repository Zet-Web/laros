import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'

import s from './Destinations.module.scss'

interface DestinationsProps {
  destinations: Destination[]
  destination: Destination
}

export const Destinations: FC<DestinationsProps> = ({
  destinations,
  destination,
}) => {
  const { push } = useRouter()

  const handlePush = (id: number) => {
    push(`/destinations/areas/${id}`)
  }

  return (
    <div className={s.wrapper}>
      {destination.location_name ? (
        <div className={s.title}>Areas of {destination.location_name}</div>
      ) : null}
      {destination.description ? (
        <div className={s.description}>{destination.description}</div>
      ) : null}

      <div className={s.images}>
        {destinations?.map(item => {
          return (
            <div
              className={s.image}
              key={item.id}
              onClick={() => handlePush(item.id)}
            >
              <div className={s.name}>{item.name}</div>
              <Image
                src={item.images[0]}
                layout={'fill'}
                alt={'destination image'}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
