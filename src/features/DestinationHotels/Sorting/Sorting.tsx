import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { Select } from 'components/Select'
import { RangeMarks } from 'components/RangeMarks'

import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { Region } from 'shared/types/region'
import { Option, Sort } from 'shared/types'

import { useGetHotelFilters } from 'shared/hooks/useGetHotelFilters'
import { useDebounce } from 'shared/hooks/useDebounce'
import { useTranslate } from 'shared/hooks/useTranslate'

import cn from 'classnames'
import s from './Sorting.module.scss'

const direction = [
  { icon: '', label: 'A-Z', value: Sort.AZ },
  { icon: '', label: 'Z-A', value: Sort.ZA },
]

interface SortingProps {
  params: Partial<HotelFilterParams>
  setParams: Dispatch<SetStateAction<Partial<HotelFilterParams>>>
  map: Region
}

const Sorting: FC<SortingProps> = ({ map, setParams, params }) => {
  const [subRegions, setSubRegions] = useState<Option[]>([])
  const [tags, categories, accommodations] = useGetHotelFilters()
  const [price, setPrice] = useState([0, 50])
  const debouncePrice = useDebounce(price, 300)
  const t = useTranslate()

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
    setSubRegions([
      {
        label: map.name,
        value: String(map.id),
        icon: '',
      },
      ...map.subRegions.map(region => ({
        label: region.name,
        value: String(region.id),
        icon: '',
      })),
    ])
  }, [map])

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
          placeholder={t('hotels.select1Title')}
          isMulti
          options={subRegions}
        />
        <Select
          placeholder={t('hotels.select2Title')}
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
          placeholder={t('hotels.select3')}
          classname={s.accommodationSelect}
          options={accommodations}
          isMulti
        />
        <div className={s.price}>
          <p>{t('hotels.price')}</p>
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
          {t('hotels.tags')}:
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
          {t('hotels.from')}
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
