import { FC, memo, useEffect, useState } from 'react'

import { formattedTitle } from 'shared/helpers/formatedTitle'
import { MapProps } from '../Greece/GreeceMap'

import RegionCard from 'components/RegionCard/RegionCard'

import s from './Kreta.module.scss'

const KretaItem: FC<MapProps> = ({ item, isShownCard, setIsShownCard }) => {
  const [title, setTitle] = useState('')

  const onClose = () => setIsShownCard(null)

  useEffect(() => {
    const newTitle = formattedTitle(item?.cartTitle)

    setTitle(newTitle)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsShownCard(item.id)}
      className={s[`${title}Location`]}
    >
      <div className={s[`${title}`]}>{item.cartTitle}</div>
      <RegionCard
        className={s[`regionCard${title}`]}
        id={item.id}
        cartText={item.cartText}
        title={item.cartTitle}
        link={item.link}
        image={item.image}
        onClose={onClose}
        isOpen={isShownCard == item.id}
      />
    </div>
  )
}

export default memo(KretaItem)
