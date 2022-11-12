import Image from 'next/image'
import { FC } from 'react'
import calendar from '/public/assets/images/calendar_icon.svg?url'
import { IconProps } from 'shared/types'

export const CalendarIcon: FC<IconProps> = ({ width = 24, height = 24 }) => {
  return <Image src={calendar} alt='icon' width={width} height={height} />
}
