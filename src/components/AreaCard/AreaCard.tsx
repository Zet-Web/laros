import { useRouter } from 'next/router'
import { FC } from 'react'
import { Destination } from 'shared/types/destinations'
import { withDomain } from 'shared/helpers/withDomain'
import Image from 'next/image'

import s from './AreaCard.module.scss'

interface AreaCardProps {
  destination: Destination
}

export const AreaCard: FC<AreaCardProps> = ({ destination }) => {
  const { push } = useRouter()

  const onClick = () => {
    push(`/areas/${destination.id}`)
  }

  return (
    <div onClick={onClick} className={s.wrapper}>
      <Image
        className={s.image}
        layout='fill'
        src={withDomain(destination.images[0])}
        alt=''
      />
      <span className={s.title}>{destination.name}</span>
    </div>
  )
}
