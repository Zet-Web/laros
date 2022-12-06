import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { Select } from 'components/Select'
import { RangeMarks } from 'components/RangeMarks'

import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { Map } from 'shared/helpers/getMap'
import { Option, Sort } from 'shared/types'

import { useGetHotelFilters } from 'shared/hooks/useGetHotelFilters'

import cn from 'classnames'
import s from './Sorting.module.scss'
import { useDebounce } from '../../../shared/hooks/useDebounce'

const direction = [
  { icon: '', label: 'A-Z', value: Sort.AZ },
  { icon: '', label: 'Z-A', value: Sort.ZA },
]

interface SortingProps {
  params: Partial<HotelFilterParams>
  setParams: Dispatch<SetStateAction<Partial<HotelFilterParams>>>
  map: Map
}

const Sorting: FC<SortingProps> = ({ map, setParams, params }) => {
  const [subRegions, setSubRegions] = useState<Option[]>([])
  const [tags, categories, accommodations] = useGetHotelFilters()
  const [price, setPrice] = useState([0, 50])
  const debouncePrice = useDebounce(price, 300)

  const changeSubRegion = (value: Option[]) => {
    const destination = value.map(v => v.value).join(',')

    setParams(prev => ({
      ...prev,
      destination: Boolean(destination.length) ? destination : undefined,
    }))
  }

  const onChangePrice = (value: number[]) => setPrice(value)

  const changeCategory = (value: Option) =>
    setParams(prev => ({ ...prev, category: value.value }))

  const changeTabs = (value: number) => {
    let newTags = params.tags?.split(',') ?? []

    if (newTags.includes(value.toString())) {
      newTags = newTags.filter(tag => tag !== value.toString())
    } else {
      newTags.push(value.toString())
    }

    setParams(prev => ({
      ...prev,
      tags: Boolean(newTags.length) ? newTags.join(',') : undefined,
    }))
  }

  useEffect(() => {
    map.currentMap &&
      setSubRegions([
        {
          label: map.currentMap.name,
          value: map.currentMap.id.toString(),
          icon: '',
        },
        ...map.currentMap.subRegions.map(r => ({
          label: r.name,
          value: r.id.toString(),
          icon: '',
        })),
      ])
  }, [map.currentMap])

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      price_gt: debouncePrice[0],
      price_lt: debouncePrice[1],
    }))
  }, [debouncePrice])

  return (
    <>
      <div className={s.selects}>
        <Select
          // @ts-ignore
          onChange={changeSubRegion}
          classname={s.select}
          // @ts-ignore
          value={subRegions.filter(
            region =>
              params.destination
                ?.split(',')
                .some(item => item === region.value) && region
          )}
          placeholder='Sub-region'
          isMulti
          options={subRegions}
        />
        <Select
          placeholder='Category'
          onChange={changeCategory}
          classname={s.select}
          options={categories}
        />
      </div>
      <div className={s.services}>
        <Select
          onChange={value =>
            setParams(prev => ({ ...prev, accommodations: value.value }))
          }
          placeholder='Accommodations'
          classname={s.accommodationSelect}
          options={accommodations}
        />
        <div className={s.price}>
          <p>Price Range</p>
          <RangeMarks
            value={price}
            onChange={onChangePrice}
            max={300}
            min={0}
            colorsTrack={['#ccc', '#333', '#ccc']}
            step={50}
          />
        </div>
      </div>
      <div className={s.sorting}>
        <div className={s.tags}>
          Tags:
          <div className={s.tabs}>
            {tags.map(tab => (
              <div
                onClick={() => changeTabs(tab.id)}
                key={tab.id}
                className={cn(s.tab, {
                  [s.selectedTab]: params.tags?.includes(tab.id.toString()),
                })}
              >
                {tab.name}
              </div>
            ))}
          </div>
        </div>
        <div className={s.direction}>
          From
          <Select
            onChange={value =>
              setParams(prev => ({
                ...prev,
                ordering: value.value as keyof Hotel,
              }))
            }
            classname={s.selectDirection}
            options={direction}
          />
        </div>
      </div>
    </>
  )
}

export default Sorting
