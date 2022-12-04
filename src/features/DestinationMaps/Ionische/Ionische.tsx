import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'

import IonischeItem from './IonischeItem'

import s from './Ionische.module.scss'

interface IonischeProps {
  location: Location[]
}

const Ionische: FC<IonischeProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
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
