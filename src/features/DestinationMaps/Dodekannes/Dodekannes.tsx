import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'

import DodekannesItem from './DodekannesItem'

import s from './Dodekannes.module.scss'

interface DodekannesProps {
  location: Location[]
}

const Dodekannes: FC<DodekannesProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
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
