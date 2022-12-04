import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'

import EuboaItem from './EuboaItem'

import s from './Euboa.module.scss'

interface EuboaProps {
  location: Location[]
}

const Euboa: FC<EuboaProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
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
