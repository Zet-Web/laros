import React, { FC, useEffect, useState } from 'react'
import s from './Select.module.scss'
import cls from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import Link from 'next/link'
import { AppDispatch } from 'store'
import { Destination } from 'shared/types/destinations'

import arrow from '/public/assets/images/homepage/arrow.png'

import Image from 'next/image'

export interface SelectBlockProps {
  setActiveMenu: (active: boolean) => void
  activeMenu: boolean
  destinationsState: Destination[]
}

export const SelectBlock: FC<SelectBlockProps> = ({
  setActiveMenu,
  activeMenu,
  destinationsState,
}) => {
  const [selected, setSelected] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const [searching, setSearching] = useState<string>('')

  const filtredItems = destinationsState.filter((item: any) =>
    item.name.toLowerCase().includes(searching.toLowerCase())
  )

  const onClickItem = (id: number) => {
    setSelected(id)
    setSearching('')
    const clickedItem = destinationsState.filter(item => item.id === id)
    setValue(clickedItem[0].name)
    setActiveMenu(false)
  }

  const onChangeValue = (e: string) => {
    setSearching(e)
    setValue(e)
    setSelected(0)
    setActiveMenu(true)
  }

  return (
    <div className={s.wrapper}>
      <label className={s.title}>Tell us where you’d like to go</label>
      <div className={s.select_block}>
        <div className={s.select}>
          <div onClick={() => setActiveMenu(!activeMenu)} className={s.image}>
            <Image src={arrow} layout={'fixed'} />
          </div>
          {activeMenu ? (
            <input
              autoFocus={true}
              value={value}
              onChange={e => onChangeValue(e.target.value)}
              onClick={() => setActiveMenu(!activeMenu)}
              className={cls(s.selected_item, {
                [s.active]: activeMenu,
              })}
            />
          ) : (
            <>
              <label
                onClick={() => setActiveMenu(!activeMenu)}
                className={cls(s.selected_item, {
                  [s.active]: activeMenu,
                })}
              >
                {value ? value : ''}
              </label>
            </>
          )}

          <div
            className={cls(s.items, {
              [s.opened]: activeMenu,
              [s.closed]: !activeMenu,
            })}
          >
            {filtredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onClickItem(item.id)}
                className={s.listItem}
              >
                <label className={s.name}>{item.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={s.link}>
          <Link href={`/destinations/${selected}`}>
            <button className={s.button}>Go</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
