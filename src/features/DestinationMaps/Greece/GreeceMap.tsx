import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import RegionCard from 'components/RegionCard/RegionCard'
import { Location } from 'shared/types/maps'
import { getPath } from 'shared/helpers/getPath'

import s from './Greece.module.scss'

export interface MapProps {
  isShownCard: number | null
  setIsShownCard: Dispatch<SetStateAction<number | null>>
  item: Location
}

const GreeceMap = ({ item, setIsShownCard, isShownCard }: MapProps) => {
  const { asPath } = useRouter()

  const onClose = () => setIsShownCard(null)
  const route = getPath(asPath)

  return (
    <div className={s.wrapper}>
      <Link href={`/destinations/${route}/${item.id}`}>
        <item.image
          className={s[`map${item.id}`]}
          onMouseEnter={() => setIsShownCard(item.id)}
        />
      </Link>

      <RegionCard
        id={item.id}
        cardText={item.cardText}
        title={item.cardTitle}
        link={item.link}
        className={s[`cartShown_${item.id}`]}
        onClose={onClose}
        isOpen={isShownCard == item.id}
      />
    </div>
  )
}

export default GreeceMap
