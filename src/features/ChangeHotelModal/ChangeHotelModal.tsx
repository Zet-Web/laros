import { FC, useEffect, useState } from 'react'

import { Button } from 'components'
import { RangeMarks } from 'components/RangeMarks'
import { Select } from 'components/Select'
import { HotelCard } from '../HotelCard'

import { useGetHotels } from 'shared/hooks/useGetHotels'
import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { Sort } from 'shared/types'
import { useGetHotelFilters } from 'shared/hooks/useGetHotelFilters'
import { useDebounce } from 'shared/hooks/useDebounce'

import s from './ChangeHotelModal.module.scss'
import cn from 'classnames'
import { useTranslate } from '../../shared/hooks/useTranslate'

interface ChangeHotelProps {
  destination: number
  onSubmit: (id: number) => void
}

export const ChangeHotelModal: FC<ChangeHotelProps> = ({
  destination,
  onSubmit,
}) => {
  const t = useTranslate()

  const [params, setParams] = useState<Partial<HotelFilterParams>>({
    destination: destination.toString(),
  })
  const [price, setPrice] = useState([0, 50])
  const debouncePrice = useDebounce(price, 100)
  const [hotels, isLoading, handleReady] = useGetHotels(params)
  const [tags, _, accommodations, handleFilters] = useGetHotelFilters()
  const [selectedHotel, setSelectedHotel] = useState<number | undefined>()

  const direction = [
    { icon: '', label: 'A-Z', value: Sort.AZ },
    { icon: '', label: 'Z-A', value: Sort.ZA },
  ]

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

  const changePrice = (value: number[]) => {
    setPrice(value)
  }

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      price_lt: debouncePrice[1],
      price_gt: debouncePrice[0],
    }))
  }, [debouncePrice])

  useEffect(() => {
    handleReady()
  }, [params])

  useEffect(() => {
    handleFilters()
  }, [])

  return (
    <div>
      <div className={s.modal}>
        <p className={s.title}>{t('changingRoomType.title')} Macedonia</p>
        <p className={s.text}>{t('changingRoomType.subTitle')}:</p>
        <form>
          <div className={s.select}>
            <Select
              onChange={value =>
                setParams(prev => ({ ...prev, accommodations: value.value }))
              }
              options={accommodations}
              placeholder={t('forms.inputLabel22')}
            />
            <div className={s.range}>
              <span>Price range</span>
              <RangeMarks
                value={price}
                onChange={changePrice}
                colorsTrack={['#ccc', '#333', '#ccc']}
                step={50}
                min={0}
                max={300}
              />
            </div>
          </div>
          <div className={s.sorting}>
            <div className={s.tags}>
              <span>{t('travelPlannerCategory.tags')}:</span>
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
              <span>{t('travelPlannerCategory.from')}</span>
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
          <div className={s.cards}>
            {!isLoading &&
              hotels.map((item, idx) => {
                return (
                  // @ts-ignore
                  <HotelCard
                    onClick={id => setSelectedHotel(id)}
                    key={idx}
                    {...item}
                  />
                )
              })}
          </div>
        </form>
      </div>
      <div className={s.buttons}>
        <Button
          onClick={selectedHotel ? () => onSubmit(selectedHotel) : undefined}
        >
          {t('changingHotel.next')}
        </Button>
        <Button variant={'outline'}>{t('changingHotel.cancel')}</Button>
      </div>
    </div>
  )
}
