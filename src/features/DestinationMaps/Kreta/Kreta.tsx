import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import KretaItem from './KretaItem'

import s from './Kreta.module.scss'

const Kreta: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Kreta.map(item => (
        <KretaItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Kreta
