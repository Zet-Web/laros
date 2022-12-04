import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'

import { Button } from 'components'

import icon from '/public/assets/images/homepage/sliderIcon.png'

import s from './SliderItem.module.scss'

interface SliderItemProps {
  image: string | StaticImageData
  name: string
  description: string
  id: number
}

export const SliderItem: FC<SliderItemProps> = ({
  image,
  name,
  description,
  id,
}) => {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  const onClickButton = (id: number) => {
    router.push(`/travel_planner/${id}`)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={s.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={cn(s.hover, {
          [s.visible]: hovered,
          [s.unVisible]: !hovered,
        })}
      >
        <Image src={icon} width={64} height={64} layout={'fixed'} />
        <h3 className={s.title}>{name}</h3>
        <p className={s.text}>{description}</p>
        <div className={s.button}>
          <Button onClick={() => onClickButton(id)} variant={'secondary'}>
            See more
          </Button>
        </div>
      </div>

      {!hovered && (
        <div className={s.unHover}>
          <span className={s.subtitle}>{name}</span>
        </div>
      )}
    </div>
  )
}
