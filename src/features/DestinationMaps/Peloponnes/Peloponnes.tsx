import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'

import PeloponnesItem from './PeloponnesItem'

import s from './Peloponnes.module.scss'

interface PeloponnesProps {
  location: Location[]
}

const Peloponnes: FC<PeloponnesProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <PeloponnesItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Peloponnes
