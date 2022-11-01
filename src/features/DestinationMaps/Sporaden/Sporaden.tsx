import { useState } from 'react'

import SporadenItem from './SporadenItem'
import { mockMaps } from 'shared/mocks/maps'

import s from './Sporaden.module.scss'

const Sporaden = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Sporaden.map(item => (
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
