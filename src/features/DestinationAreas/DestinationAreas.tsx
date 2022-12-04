import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import { mockAreas } from 'shared/mocks/areas'
import { mockAreasType } from 'shared/types/areas'

import s from './DestinationAreas.module.scss'

export interface DestinationAreasProps {
  name: string
}

const DestinationAreas: FC<DestinationAreasProps> = ({ name }) => {
  const areas: StaticImageData[] = mockAreas[name as keyof mockAreasType]

  return (
    <div className={s.container}>
      <h3 className={s.title}>Areas of {name}</h3>

      <p className={s.description}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </p>

      <div className={s.wrapperImages}>
        {areas.map(area => (
          <div className={s.areasImage}>
            {/*TODO add a block with text and place it by positioning*/}
            <Image key={area.src} src={area} layout={'fill'} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestinationAreas
