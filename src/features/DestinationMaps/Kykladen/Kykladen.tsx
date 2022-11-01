import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import KykladenItem from './KykladenItem'

import s from './Kykladen.module.scss'

const Kykladen: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Kykladen.map(item => (
        <KykladenItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Kykladen
