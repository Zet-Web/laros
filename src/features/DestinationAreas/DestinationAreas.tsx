import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import { mockAreas } from 'shared/mocks/areas'
import { mockAreasType } from 'shared/types/areas'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './DestinationAreas.module.scss'

export interface DestinationAreasProps {
  name: string
}

const DestinationAreas: FC<DestinationAreasProps> = ({ name }) => {
  const t = useTranslate()
  const areas: StaticImageData[] = mockAreas[name as keyof mockAreasType]

  return (
    <div className={s.container}>
      <h3 className={s.title}>
        {t('destinationsSubRegion.areasOfTitle')} {name}
      </h3>
      <p className={s.description}>
        {t('destinationsSubRegion.areasOfSubTitle')}
      </p>

      <div className={s.wrapperImages}>
        {areas.map((area, index) => (
          <div className={s.areasImage} key={index}>
            {/*TODO add a block with text and place it by positioning*/}
            <Image key={area.src} src={area} layout={'fill'} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestinationAreas
