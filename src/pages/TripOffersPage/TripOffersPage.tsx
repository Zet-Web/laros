import { FC, useEffect, useState } from 'react'
import s from './TripOffersPage.module.scss'
import cn from 'classnames'

import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'

import { tripPageInfo } from 'shared/mocks/tripInfo'

import listIcon from '/public/assets/images/list.svg?url'
import gridIcon from '/public/assets/images/grid.svg?url'
import { Tags } from 'components/Tags'
import Image from 'next/image'
import { useGetTrips } from 'shared/hooks/useGetTrips'
import { Select } from 'components/Select'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getTripCategoriesThunk } from 'store/slices/trips/thunk'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import { getRootDestinations, getSubRegions } from 'store/slices/destinations/selectors'
import { getHotelTags } from 'shared/api/routes/hotels'
import { Tag } from 'shared/types/tag'
import { TripSortOptions } from 'shared/constants/filters'
import { TripCategory, TripFilterParams } from 'shared/types/trip'
import { Option } from 'shared/types'
import { TripCard } from 'features'

enum View {
  LIST,
  GRID,
}
export const TripOffersPage: FC = () => {
  const { query, push } = useRouter()
  const { category } = query
  const { control, watch } = useForm()
  const dispatch = useAppDispatch();

  const [params, setParams] = useState<Partial<TripFilterParams>>({})
  const [trips, isLoading, handleReady] = useGetTrips(params)
  const [tripCategoryInfo, setTripCatInfo] = useState<TripCategory | null>()
  const [view, setView] = useState(View.GRID)
  const [tags, setTags] = useState<Tag[]>([])
  const [region, setRegion] = useState<Option | null>(null)

  // const tripCategoryInfo = useAppSelector((state) => state.trips.categories.find((cat) => cat.id === Number(category)));
  const destinations = useAppSelector((state) => state.destinations.destinations);
  const regions = getRootDestinations(destinations)
  const subregions = useAppSelector((state) => getSubRegions(state, region?.value ?? null));

  const updateRequest = (form) => {
    form.region && setRegion(form.region)
    const subregions = form.subregions ? form.subregions.map((region: Option) => region.value) : [];
    const destination = subregions.length ? subregions.join(',') : region?.value ?? undefined
    setParams({ destination, ordering: form.ordering?.value, })
  }

  useEffect(() => {
    const loadHotelTags = async () => {
      try {
        const { data } = await getHotelTags()
        setTags(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadHotelTags()
    dispatch(getTripCategoriesThunk())
    dispatch(getDestinationsThunk())
  }, []);

  useEffect(() => handleReady(true), [params])

  useEffect(() => {
    const subscription = watch((value) => updateRequest(value));
    return () => subscription.unsubscribe();
  }, [category, watch]);

  useEffect(() => {
    setTripCatInfo(tripPageInfo)
  }, [category])

  return (
    <div className={s.container}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${tripCategoryInfo?.image})`,
        }}
      />
      <div className={s.title}>{tripCategoryInfo?.name}</div>
      <div className={s.description}>{tripCategoryInfo?.description}</div>
      <div className={s.filters}>
        <div className={s.filterTitle}>Sort by</div>
        <div className={s.filterContent}>
          <div className={s.filterSelects}>
            <Controller
              name='region'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select placeholder='Destination' options={regions.map((region) => ({ label: region.name, value: region.id.toString() })) ?? []} onChange={onChange} value={value} classname={s.select} />
              )}
            />
            <Controller
              name='subregions'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select placeholder='+ add sub-region'
                  options={subregions.map((region) => ({ label: region.name, value: region.id.toString() })) ?? []}
                  onChange={onChange}
                  value={value}
                  isMulti
                  classname={s.select} />
              )}
            />
            <Controller
              name='duration'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder='Duration'
                  options={[]}
                  onChange={onChange}
                  value={value}
                  classname={s.select} />
              )}
            />
          </div>
          <div className={s.sort}>
            <div className={s.sortFrom}>From </div>
            <Controller
              name='ordering'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select options={TripSortOptions} onChange={onChange} value={value} hasArrow={false} classname={s.select} />
              )}
            />
          </div>
        </div>



        <div className={s.tagSwitchFilters}>
          <div className={s.tags}>
            <Controller
              name='tags'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Tags tags={tags} onChange={onChange} value={value} />
              )}
            />
          </div>
          <div className={s.viewSwitch}>
            <span
              onClick={() => setView(View.LIST)}
              className={cn(s.viewIcon, {
                [s.viewSelected]: view === View.LIST,
              })}
            >
              <Image src={listIcon} width={16} height={16} />
            </span>
            <span
              onClick={() => setView(View.GRID)}
              className={cn(s.viewIcon, {
                [s.viewSelected]: view === View.GRID,
              })}
            >
              <Image src={gridIcon} width={16} height={16} />
            </span>
          </div>
        </div>
      </div>
      <div className={cn(s.offers, view === View.GRID ? s.grid : s.list)}>
        {isLoading && <div className={s.loading}>Loading...</div>}
        {!isLoading &&
          trips?.length ?
          trips.map((offer, idx) => {
            return (
              // @ts-ignore
              <TripCard
                key={idx}
                {...offer}
                wide={view === View.LIST}
              />
            )
          }) : <div className={s.empty}>No options</div>}
      </div>
    </div>
  )
}

