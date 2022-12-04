import { FC, memo, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import Polis from '/public/assets/images/destinations/Polis.svg'

import cn from 'classnames'
import s from './RegionCard.module.scss'

interface RegionCardProps {
  id: number
  image?: string | StaticImageData
  title: string
  cardText: string
  className?: string
  onClose?: () => void
  link: string
  onOpen?: () => void
  isOpen?: boolean
}

const RegionCard: FC<RegionCardProps> = ({
  id,
  image,
  title,
  cardText,
  onClose,
  onOpen,
  isOpen,
  link,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, () => onClose && ref.current && onClose())

  return (
    <>
      {isOpen && (
        <div ref={ref} className={cn(s.cart_shown, className)}>
          <div className={s.cart_picture}>
            {image ? (
              <Image
                src={image}
                width={240}
                height={135}
                alt='cart picture image'
              />
            ) : (
              <Polis />
            )}
          </div>
          <h3 className={s.cart_title}>{title}</h3>
          <p className={s.description}>{cardText}</p>
          <div className={s.link__blockDestinationMap}>
            <Link href={`/areas/${id}`}>
              <span className={s.link__detailCartMap}>Learn more</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(RegionCard)
