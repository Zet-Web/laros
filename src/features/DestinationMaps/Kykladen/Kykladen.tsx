import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'

import KykladenItem from './KykladenItem'

import s from './Kykladen.module.scss'

interface KykladenProps {
  location: Location[]
}

const Kykladen: FC<KykladenProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <KykladenItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Kykladen
