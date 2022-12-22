import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'
import CyrpusItem from './CyrpusItem'

import s from './Cyrpus.module.scss'

interface CyrpusProps {
  location: Location[]
}

const Cyrpus: FC<CyrpusProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <CyrpusItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Cyrpus
