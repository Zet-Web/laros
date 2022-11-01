import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

import { Select } from 'components/Select'
import { Range } from 'components/Range'

import { HotelFilterParams } from 'shared/types/hotel'

import s from './Sorting.module.scss'

const categories = [{ icon: '', label: 'Category 1', value: 'categoty-1' }]
const regions = [
  { icon: '', label: 'Sub-region name', value: 'sub-region-name' },
]
const AccommodationTypes = [
  { icon: '', label: 'Accommodation type', value: 'accommodation-type' },
]
const Direction = [
  { icon: '', label: 'A-Z', value: 'asc' },
  { icon: '', label: 'Z-A', value: 'desc' },
]

interface SortingProps {
  params: Partial<HotelFilterParams>
  setParams: Dispatch<SetStateAction<Partial<HotelFilterParams>>>
}

const Sorting: FC<SortingProps> = ({ setParams, params }) => {
  const [sort, setSort] = useState({
    price: 0,
    tags: '',
    direction: 'asc',
    subRegion: '',
    category: '',
    accomodationType: [],
  })

  const onChange = (value: number | undefined) =>
    setSort(prev => ({ ...prev, price: value! }))

  const changeSelect = (value: string) => setSort(prev => ({ ...prev }))

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setParams(sort)
    }, 200)

    return () => clearTimeout(timeOut)
  }, [sort])

  return (
    <>
      <div className={s.selects}>
        <Select
          onChange={changeSelect}
          classname={s.select}
          isMulti
          options={regions}
        />
        <Select
          onChange={changeSelect}
          classname={s.select}
          options={categories}
        />
      </div>
      <div className={s.services}>
        <Select
          onChange={changeSelect}
          classname={s.select}
          options={AccommodationTypes}
        />
        <div className={s.price}>
          <p>Price Range</p>
          <Range
            onChange={onChange}
            value={sort.price}
            max={264}
            currency='CHF'
          />
        </div>
      </div>
      <div className={s.sorting}>
        <div className={s.tags}>
          Tags:
          <Tabs selectedTabClassName={s.selectedTab} defaultIndex={0}>
            <TabList className={s.tabs}>
              <Tab className={s.tab}>Beach view</Tab>
              <Tab className={s.tab}>Breakfast included</Tab>
              <Tab className={s.tab}>Vitae at</Tab>
              <Tab className={s.tab}>Vivamus consectetur</Tab>
            </TabList>
          </Tabs>
        </div>
        <div className={s.direction}>
          From
          <Select
            onChange={changeSelect}
            classname={s.selectDirection}
            options={Direction}
          />
        </div>
      </div>
    </>
  )
}

export default Sorting
