import { useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'
import NordagaischeItem from './NordagaischeItem'

import s from './Nordagaische.module.scss'

const Nordagaische = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Nordagaische.map(item => (
        <NordagaischeItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Nordagaische
