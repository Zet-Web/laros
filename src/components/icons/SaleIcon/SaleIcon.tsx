import { FC } from 'react'
import Image from 'next/image'

import sale from '/public/assets/images/sale.svg?url'

export const SaleIcon: FC = () => (
  <Image src={sale} width={16} height={16} alt={'sale'} />
)
