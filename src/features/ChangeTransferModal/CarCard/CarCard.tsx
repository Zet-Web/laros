import Image from 'next/image'
import { FC } from 'react'
import { Car } from 'shared/types/car'
import s from './CarCard.module.scss'
import peopleGroup from '/public/assets/images/peopleGroup.svg'
import luggageIcon from '/public/assets/images/luggage.svg'
import { Button, CalendarIcon, GeoTagIcon } from 'components'
import { Currency } from 'shared/types'
import lineRoute from '/public/assets/images/lineGeoIcon.svg'
import cn from 'classnames'

type CarCardProps = Car & { onClick: (id: number) => void; isSelected: boolean }

export const CarCard: FC<CarCardProps> = ({
  id,
  model,
  image,
  description,
  capacity,
  luggage,
  price,
  to_dest_name,
  from_dest_name,
  isSelected,
  onClick,
}) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <Image src={image ?? ''} height={172} width={295} />
      </div>
      <div className={s.content}>
        <div className={s.title}>{model}</div>
        <div className={s.description}>{description}</div>
        <div className={s.item}>
          <Image src={peopleGroup} />{' '}
          <span className={s.capacity}>{capacity} people</span>
        </div>
        <div className={s.item}>
          <Image src={luggageIcon} />{' '}
          <span className={s.luggage}>
            {luggage} medium-sized bags or suitcases
          </span>
        </div>
        <div className={s.item}>
          <CalendarIcon />{' '}
          <span className={s.period}>1 Aug 2022 - 15 Sep 2022</span>
          {/* TODO wait API */}
        </div>
      </div>
      <div className={s.total}>
        <div className={s.route}>
          <div className={s.routeItem}>
            <GeoTagIcon />{' '}
            <span className={s.routePlace}>{from_dest_name}</span>
          </div>
          <div className={s.lineRoute}>
            <Image src={lineRoute} height={14} width={2} />
          </div>
          <div className={s.routeItem}>
            <GeoTagIcon /> <span className={s.routePlace}>{to_dest_name}</span>
          </div>
        </div>
        <div className={s.price}>
          <div className={s.priceTitle}>Rent price for {} days:</div>{' '}
          {/* TODO wait API */}
          <div className={s.priceTotal}>
            {price} {Currency.CHF}
          </div>
        </div>
        <Button
          onClick={() => onClick(id)}
          classname={cn(s.selectBtn, { [s.selectedCar]: isSelected })}
        >
          {isSelected ? 'Selected' : 'Select car'}
        </Button>
      </div>
    </div>
  )
}
