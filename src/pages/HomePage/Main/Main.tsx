import s from './Main.module.scss'
import { SelectBlock } from './Select'
import { SelectComponent } from '../SelectedType'
import Image from 'next/image'
import play from '/public/assets/images/homepage/play.png'
import { FC, useEffect, useState } from 'react'
import { Destination } from '../../../shared/types/destinations'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../store'
import { DestinationsState } from '../../../store/slices/destinations/destinations'
import { getDestinationsThunk } from '../../../store/slices/destinations/thunk'

export interface MainBlockProps {
  setActiveMenu: (active: boolean) => void
  activeMenu: boolean
}

export const Main: FC<MainBlockProps> = ({ activeMenu, setActiveMenu }) => {
  const [destinationsState, setDestinationsState] = useState<Destination[]>([])
  const dispatch = useDispatch<AppDispatch>()
  const destinations = useSelector(
    // @ts-ignore
    (state: DestinationsState) => state.destinations.destinations
  )
  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  useEffect(() => {
    setDestinationsState(destinations)
  }, [destinations])

  return (
    <div className={s.main}>
      <div className={s.main_wrapper}>
        <div className={s.main_blur}>
          <div className={s.main_text}>
            <h1 className={s.title}>
              The unique <br /> Swiss Tour Operator
              <br /> for Greece & Cyprus
            </h1>
            <p className={s.subtitle}>
              and able to travel you around the world
            </p>
            <div className={s.select} onClick={e => e.stopPropagation()}>
              <SelectBlock
                destinationsState={destinationsState}
                setActiveMenu={setActiveMenu}
                activeMenu={activeMenu}
              />
            </div>
          </div>
          <div className={s.slider}>
            <h3 className={s.selectType_title}>Or browse the selected type</h3>
            <SelectComponent />
          </div>
        </div>
      </div>
      <div className={s.video}>
        <div className={s.play_icon}>
          <Image src={play} layout={'fixed'} />
        </div>
      </div>
    </div>
  )
}
