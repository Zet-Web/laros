import { FC, useEffect, useState } from 'react'
import s from './HomePage.module.scss'

import { ExploreMock } from '../../shared/mocks/explore'
import { PostsMock } from '../../shared/mocks/posts'
import { AboutItemsMock } from '../../shared/mocks/whoweare'
import { reviewsMock } from 'shared/mocks/reviews'

import { Main } from './Main'
import { Subscribe } from './Subscribe'
import { Explore } from './Explore'
import { PostBlock } from './Posts'
import { WhoWeAre } from './WhoWeAre'

import { Comments } from './Comments'
import { Destination } from '../../shared/types/destinations'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { getDestinationsThunk } from '../../store/slices/destinations/thunk'
import { DestinationsState } from '../../store/slices/destinations/destinations'

export const HomePage: FC = () => {

  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  return (
    <div onClick={() => setActiveMenu(false)} className={s.wrapper}>
      <Main setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <WhoWeAre items={AboutItemsMock} />
      <Explore images={ExploreMock} />
      <PostBlock posts={PostsMock} />
      <div className={s.commentsWrapper}>
        <Comments comments={reviewsMock} />
      </div>
      <Subscribe />
    </div>
  )
}
