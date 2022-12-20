import { FC } from 'react'
import Image from 'next/image'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Teammate } from 'shared/types/team'

import s from './EmployeCard.module.scss'

type EmployeCardProps = Teammate

export const EmployeCard: FC<EmployeCardProps> = ({
  image,
  name,
  post,
  description,
}) => {
  const t = useTranslate()

  return (
    <div className={s.wrapper}>
      <Image
        className={s.photo}
        src={image}
        alt='Picture of the author'
        width={302}
        height={320}
      />
      <div className={s.text}>
        <p className={s.name}>{name}</p>
        <p className={s.post}>{t(post)}</p>
        <p className={s.desc}>{t(description)}</p>
      </div>
    </div>
  )
}
