import { FC, useEffect, useState } from 'react'
import { MapProps } from '../Greece/GreeceMap'

import { formattedTitle } from 'shared/helpers/formatedTitle'
import RegionCard from 'components/RegionCard/RegionCard'

import s from './Cyrpus.module.scss'

const CyrpusItem: FC<MapProps> = ({ item, setIsShownCard, isShownCard }) => {
  const [title, setTitle] = useState('')

  const onClose = () => setIsShownCard(null)

  useEffect(() => {
    const newTitle = formattedTitle(item?.cardTitle)

    setTitle(newTitle)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsShownCard(item.id)}
      className={s[`${title}Location`]}
    >
      <div className={s[`${title}`]}>{item.cardTitle}</div>
      <RegionCard
        id={item.id}
        cardText={item.cardText}
        title={item.cardTitle}
        link={item.link}
        image={item.image}
        onClose={onClose}
        isOpen={isShownCard == item.id}
      />
    </div>
  )
}

export default CyrpusItem
