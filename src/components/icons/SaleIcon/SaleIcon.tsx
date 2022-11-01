import Image from "next/image"
import { FC } from "react"
import sale from "/public/assets/images/sale.svg"

export const SaleIcon: FC = () => {
  return (
    <>
      <Image src={sale} width={16} height={16} />
    </>
  )
}
