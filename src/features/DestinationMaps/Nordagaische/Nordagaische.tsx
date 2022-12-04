import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'
import NordagaischeItem from './NordagaischeItem'

import s from './Nordagaische.module.scss'

interface NordagaischeProps {
  location: Location[]
}

const Nordagaische: FC<NordagaischeProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <NordagaischeItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Nordagaische
