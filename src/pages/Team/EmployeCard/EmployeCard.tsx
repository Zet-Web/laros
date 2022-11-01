import { FC, useState } from 'react'
import Image from 'next/image'
import s from './EmployeCard.module.scss'
import { Teammate } from 'shared/types/team'

type EmployeCardProps = Teammate

export const EmployeCard: FC<EmployeCardProps> = ({
  image,
  name,
  post,
  description,
}) => {
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
        <p className={s.post}>{post}</p>
        <p className={s.desc}>{description}</p>
      </div>
    </div>
  )
}
