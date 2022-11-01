import Image from 'next/image'
import { FC } from 'react'
import calendar from '/public/assets/images/calendar_icon.svg'

export const CalendarIcon: FC = () => {
  return (
    <>
      <Image src={calendar} alt='icon' width={24} height={24} />
    </>
  )
}
