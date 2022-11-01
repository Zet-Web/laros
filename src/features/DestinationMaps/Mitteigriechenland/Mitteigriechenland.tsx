import { useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'
import MitteigriechenlandItem from './MitteigriechenlandItem'

import s from './Mitteigriechenland.module.scss'

const Mitteigriechenland = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Mitteigriechenland.map(item => (
        <MitteigriechenlandItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Mitteigriechenland
