import { FC, useEffect, useState } from 'react'
import s from './HomePage.module.scss'

import { PostsMock } from '../../shared/mocks/posts'
import { AboutItemsMock } from '../../shared/mocks/whoweare'
import { reviewsMock } from 'shared/mocks/reviews'

import { Main } from './Main'
import { Subscribe } from './Subscribe'
import { Explore } from './Explore'
import { PostBlock } from './Posts'
import { WhoWeAre } from './WhoWeAre'

import { Comments } from './Comments'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

export const HomePage: FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [videoIsFullscreen, setVideoIsFullscreen] = useState<boolean>(true)

  const dispatch = useAppDispatch()
  const destinations = useAppSelector(state => state.destinations.destinations)
  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  return (
    <div
      onMouseEnter={() => setVideoIsFullscreen(true)}
      onClick={() => setActiveMenu(false)}
      className={s.wrapper}
    >
      <Main
        setVideoIsFullscreen={setVideoIsFullscreen}
        videoIsFullscreen={videoIsFullscreen}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        destinations={destinations}
      />
      <WhoWeAre items={AboutItemsMock} />
      <Explore destinations={destinations} />
      <PostBlock posts={PostsMock} />
      <div className={s.commentsWrapper}>
        <Comments comments={reviewsMock} />
      </div>
      <Subscribe />
    </div>
  )
}
