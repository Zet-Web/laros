import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'

import KretaItem from './KretaItem'

import s from './Kreta.module.scss'

interface KretaProps {
  location: Location[]
}

const Kreta: FC<KretaProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
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
