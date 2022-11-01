import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import MacedoniaItem from './MacedoniaItem'

import s from './Macedonia.module.scss'

const Macedonia: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Macedonia.map(item => (
        <MacedoniaItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Macedonia
