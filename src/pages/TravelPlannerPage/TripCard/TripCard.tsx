import { Button } from 'components/Button'
import { FlightIcon, SaleIcon } from 'components/icons'
import { FC } from 'react'
import { generateTagText } from 'shared/helpers/tripCard'
import s from './TripCard.module.scss'
import cn from 'classnames'
import { Currency } from 'shared/types'

interface TripCardProps {
  id: number
  images: string[]
  name: string
  price: number
  period: string
  duration: number
  tags: string[]
  sale?: number
  wide?: boolean
}

export const TripCard: FC<TripCardProps> = ({
  name,
  wide,
  images = [],
  sale,
  tags = [],
  price,
  period,
  duration,
}) => {
  return (
    <div className={cn(s.wrapper, { [s.wide]: wide })}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${images[0]})`,
        }}
      >
        {sale && (
          <div className={s.sale}>
            {`- ${sale}% OFF `}
            <SaleIcon />
          </div>
        )}
      </div>
      <div className={s.main}>
        <div className={s.row}>
          <div className={s.regionName}>
            <div className={s.meta}>Region Name</div>
            <div>{name}</div>
          </div>
          <div className={s.fromWrapper}>
            <div className={s.meta}>From</div>
            <div className={s.from}>{`${price} ${Currency.CHF}`}</div>
            <div className={s.meta}>Pro Person</div>
          </div>
        </div>
        <div className={s.row}>
          <div className={s.periodWrapper}>
            <div className={s.meta}>Travel Period</div>
            <div className={s.period}>{period}</div>
          </div>
          <div className={s.durationWrapper}>
            <div className={s.meta}>Duration</div>
            <div className={s.duration}>{`${duration} Days`}</div>
          </div>
        </div>
        <div className={s.lastRow}>
          <div className={s.tags}>
            {tags.length
              ? tags.map((tag, idx) => (
                  <div key={idx} className={s[tag]}>
                    {generateTagText(tag)}
                  </div>
                ))
              : null}
          </div>
        </div>
        <Button classname={s.myButton}>View Offer</Button>
      </div>
    </div>
  )
}
