import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import { withDomain } from 'shared/helpers/withDomain'
import { useTranslate } from 'shared/hooks/useTranslate'

import s from './DestinationAreas.module.scss'

export interface DestinationAreasProps {
  name: string
  areas: string[] | StaticImageData[] | HTMLImageElement[]
}

const DestinationAreas: FC<DestinationAreasProps> = ({ name, areas }) => {
  const t = useTranslate()

  return (
    <div className={s.container}>
      <h3 className={s.title}>
        {t('common.areasOf')} {name}
      </h3>

      <p className={s.description}>{t('homepage.newPlacesSubTitle')}</p>

      <div className={s.wrapperImages}>
        {areas.map((area, index) => (
          <div className={s.areasImage} key={index}>
            {/*TODO add a block with text and place it by positioning*/}
            {area ? (
              <Image
                key={`${area}-${index}`}
                src={withDomain(area)}
                layout={'fill'}
                alt=''
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestinationAreas
