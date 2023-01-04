import { FC, useRef } from 'react'
import Image from 'next/image'
import screenfull from 'screenfull'

import { ReactPlayer } from 'components'
import { SelectBlock } from './Select'

import { Destination } from 'shared/types/destinations'
import { TripCategory } from 'shared/types/trip'
import { useTranslate } from 'shared/hooks/useTranslate'

import play from '/public/assets/images/homepage/play.png'

import s from './Main.module.scss'

export interface MainBlockProps {
  setActiveMenu: (active: boolean) => void
  setVideoIsFullscreen: (isFullscreen: boolean) => void
  activeMenu: boolean
  videoIsFullscreen: boolean
  destinations: Destination[]
  travelTypes: TripCategory[]
}

export const Main: FC<MainBlockProps> = ({
  activeMenu,
  setActiveMenu,
  videoIsFullscreen,
  setVideoIsFullscreen,
  destinations,
  travelTypes,
}) => {
  const videoRef = useRef<HTMLDivElement>(null)
  const t = useTranslate()
  {
    t('.')
  }

  const onFullScreen = () => {
    setVideoIsFullscreen(false)
    if (screenfull.isEnabled && videoRef.current) {
      screenfull.request(videoRef.current)
    }
  }

  return (
    <div className={s.main}>
      <div className={s.main_wrapper}>
        <div className={s.main_text}>
          <h1 className={s.title}>{t('homepage.title')}</h1>
          <p className={s.subtitle}>{t('homepage.subTitle')}!</p>
          <div className={s.select} onClick={e => e.stopPropagation()}>
            <SelectBlock
              destinations={destinations}
              setActiveMenu={setActiveMenu}
              activeMenu={activeMenu}
            />
          </div>
        </div>
        <div className={s.main_blur}></div>
      </div>
      <div className={s.video}>
        <div
          onMouseLeave={() => setVideoIsFullscreen(true)}
          ref={videoRef}
          className={s.reactPlayerWrapper}
        >
          <ReactPlayer
            stopOnUnmount
            controls
            playing={!videoIsFullscreen}
            url={'https://www.youtube.com/watch?v=graxkD8NzEw'}
          />
          :
        </div>
        <div onClick={onFullScreen} className={s.play_icon}>
          <Image src={play} layout={'fixed'} />
        </div>
      </div>
    </div>
  )
}
