import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import cn from 'classnames'

import { Button } from 'components'

import { withDomain } from 'shared/helpers/withDomain'
import { useTranslate } from 'shared/hooks/useTranslate'

import icon from '/public/assets/images/homepage/sliderIcon.png'

import s from './SliderItem.module.scss'

interface SliderItemProps {
  images: string[]
  name: string
  description: string
  id: number
}

export const SliderItem: FC<SliderItemProps> = ({
  images,
  name,
  description,
  id,
}) => {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const t = useTranslate()

  const onClickButton = (id: number) => {
    router.push(`/travel_planner/${id}`)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={s.wrapper}
      style={{ backgroundImage: `url(${withDomain(images[0])})` }}
    >
      <div
        className={cn(s.hover, {
          [s.visible]: hovered,
          [s.unVisible]: !hovered,
        })}
      >
        <Image src={icon} width={64} height={64} layout={'fixed'} />
        <h3 className={s.title}>{name}</h3>

        <p className={s.text}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </p>

        <div className={s.button}>
          <Button onClick={() => onClickButton(id)} variant={'secondary'}>
            {t('homepage.whoWeAreButton')}
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
