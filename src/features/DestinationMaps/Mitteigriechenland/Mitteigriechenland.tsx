import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'
import MitteigriechenlandItem from './MitteigriechenlandItem'

import s from './Mitteigriechenland.module.scss'

interface MitteigriechenlandProps {
  location: Location[]
}

const Mitteigriechenland: FC<MitteigriechenlandProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <MitteigriechenlandItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Mitteigriechenland
