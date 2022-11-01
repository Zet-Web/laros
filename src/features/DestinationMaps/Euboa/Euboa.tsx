import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import EuboaItem from './EuboaItem'

import s from './Euboa.module.scss'

const Euboa: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Euboa.map(item => (
        <EuboaItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Euboa
