import Image from "next/image"
import { FC } from "react"
import user from "/public/assets/images/userIcon.svg"

export const UserIcon: FC = () => {
    return (
        <>
            <Image src={user} width={16} height={16} />
        </>
    )
}
