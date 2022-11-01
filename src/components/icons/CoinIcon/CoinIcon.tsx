import Image from 'next/image'
import { FC } from 'react'
import coin from '/public/assets/images/Coin.svg'

export const CoinIcon: FC = () => {
    return (
        <>
            <Image src={coin} alt='icon' width={13} height={13} />
        </>
    )
}