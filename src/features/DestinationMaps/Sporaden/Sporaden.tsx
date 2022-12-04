import { FC, useState } from 'react'

import SporadenItem from './SporadenItem'
import { Location } from 'shared/types/maps'

import s from './Sporaden.module.scss'

interface SporadenProps {
  location: Location[]
}

const Sporaden: FC<SporadenProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <SporadenItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Sporaden
