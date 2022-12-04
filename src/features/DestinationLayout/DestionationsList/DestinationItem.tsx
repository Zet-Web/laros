import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Region } from 'shared/types/region'
import getPath from 'shared/helpers/getPath'

import cn from 'classnames'
import s from './DestinationsList.module.scss'

interface DestinationItemProps {
  region: Region
}

const DestinationItem: FC<DestinationItemProps> = ({ region }) => {
  const { push, query, pathname } = useRouter()

  const [route, setRoute] = useState('')

  const isActive = region.id === Number(query.id)

  useEffect(() => {
    !query.id ? setRoute(pathname) : setRoute(getPath(pathname))
  }, [query.id])

  return (
    <div
      onClick={() => push(`${route}/${region.id}`)}
      className={cn(s.item, {
        [s.active]: isActive,
      })}
    >
      <region.icon
        className={cn(s.icon, {
          [s.iconActive]: isActive,
        })}
      />
      <span className={s.title}>{region.name}</span>
    </div>
  )
}

export default DestinationItem
