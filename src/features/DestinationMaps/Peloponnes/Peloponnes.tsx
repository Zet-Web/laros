import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import IonischeItem from './PeloponnesItem'

import s from './Peloponnes.module.scss'

const Peloponnes: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Peloponnes.map(item => (
        <IonischeItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Peloponnes
