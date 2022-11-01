import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import DodekannesItem from './DodekannesItem'

import s from './Dodekannes.module.scss'

const Dodekannes: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Dodekannes.map(item => (
        <DodekannesItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Dodekannes
