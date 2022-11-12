import Image from 'next/image'
import { FC } from 'react'
import pencil from '/public/assets/images/pencil.svg?url'
import { IconProps } from 'shared/types'

export const PencilIcon: FC<IconProps> = ({ width = 13, height = 13 }) => {
  return <Image src={pencil} width={width} height={height} alt='icon' />
}
