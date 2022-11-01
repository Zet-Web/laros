import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import s from './DestinationAreas.module.scss'

interface DestinationAreasProps {
  areas: StaticImageData[]
  name: string
}

const DestinationAreas: FC<DestinationAreasProps> = ({ areas, name }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Areas of {name}</h3>
      <p className={s.description}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </p>
      <div className={s.wrapperImages}>
        {areas.map(area => (
          <Image key={area.src} src={area} alt='' />
        ))}
      </div>
    </div>
  )
}

export default DestinationAreas
