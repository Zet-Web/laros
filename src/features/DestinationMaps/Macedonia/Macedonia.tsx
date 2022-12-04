import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'
import MacedoniaItem from './MacedoniaItem'

import s from './Macedonia.module.scss'

interface MacedoniaProps {
  location: Location[]
}

const Macedonia: FC<MacedoniaProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
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
