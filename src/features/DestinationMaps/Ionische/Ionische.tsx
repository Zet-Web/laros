import { FC, useState } from 'react'

import { mockMaps } from 'shared/mocks/maps'

import IonischeItem from './IonischeItem'

import s from './Ionische.module.scss'

const Ionische: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {mockMaps.Ionische.map(item => (
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

export default Ionische
