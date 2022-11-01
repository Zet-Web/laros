import React, { FC, useEffect, useState } from 'react'
import s from './SliderItem.module.scss'
import cls from 'classnames'
import Image from 'next/image'
import { Button } from 'components'
import { useRouter } from 'next/router'
import { SelectedType } from 'shared/types/selectedtype'

type SliderItemProps = SelectedType

export const SliderItem: FC<SliderItemProps> = ({
  image,
  icon,
  title,
  text,
  subtitle,
}) => {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  const onClickButton = () => {
    router.push(`/trip_planner/id`)
  }
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={s.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={cls(s.hover, {
          [s.visible]: hovered,
          [s.unvisible]: !hovered,
        })}
      >
        <Image src={icon} width={64} height={64} layout={'fixed'} />
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
        <div className={s.button}>
          <Button onClick={onClickButton} variant={'secondary'}>
            See more
          </Button>
        </div>
      </div>

      {!hovered && (
        <div className={s.unhover}>
          <span className={s.subtitle}>{subtitle}</span>
        </div>
      )}
    </div>
  )
}
