import Image from "next/image"
import { FC } from "react"
import warning from "/public/assets/images/warning.svg"

export const WarningIcon: FC = () => {
    return (
        <>
            <Image src={warning} width={16} height={16} />
        </>
    )
}
