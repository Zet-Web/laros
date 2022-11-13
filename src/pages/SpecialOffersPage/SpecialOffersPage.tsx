import { Container } from 'components'
import { FC, useEffect, useState } from 'react'
import s from './SpecialOffersPage.module.scss';
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { TripFilterParams } from 'shared/types/trip';
import { useGetTrips } from 'shared/hooks/useGetTrips';
import { Option } from 'shared/types';
import { Tag } from 'shared/types/tag';
import { Controller, useForm } from 'react-hook-form';
import { getHotelTags } from 'shared/api/routes/hotels';
import { getRootDestinations, getSubRegions } from 'store/slices/destinations/selectors';
import { getDestinationsThunk } from 'store/slices/destinations/thunk';
import { getTripCategoriesThunk } from 'store/slices/trips/thunk';
import { Select } from 'components/Select';
import { TripSortOptions } from 'shared/constants/filters';
import { Tags } from 'components/Tags';
import { TripCard } from 'features';

export const SpecialOffersPage: FC = () => {
    const { control, watch } = useForm()
    const dispatch = useAppDispatch()

    const [params, setParams] = useState<Partial<TripFilterParams>>({ offer: true })
    const [trips, isLoading, handleReady] = useGetTrips(params)
    const [tags, setTags] = useState<Tag[]>([])
    const [region, setRegion] = useState<Option | null>(null)

    const destinations = useAppSelector((state) => state.destinations.destinations)
    const regions = getRootDestinations(destinations)
    const subregions = useAppSelector((state) => getSubRegions(state, region?.value ?? null))

    const updateRequest = (form: any) => { // TODO
        form.region && setRegion(form.region)
        const subregions = form.subregions ? form.subregions.map((region: Option) => region.value) : [];
        const destination = subregions.length ? subregions.join(',') : form.region?.value ?? undefined
        setParams({ destination, ordering: form.ordering?.value, offer: true })
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
    }, [watch]);



    return (
        <Container>
            <div className={s.wrapper} >
                <div className={s.title}>Special offers</div>
                <div className={s.nav}>
                    <div className={s.subtitle}>
                        Faucibus enim sit leo, purus, odio erat. Neque scelerisque volutpat morbi proin. Massa quis montes, scelerisque commodo elit erat in urna id. Purus sit odio egestas venenatis viverra blandit amet vitae.
                    </div>
                </div>

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
                <div className={s.tag}>
                    <div className={s.tags}>
                        <Controller
                            name='tags'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Tags tags={tags} onChange={onChange} value={value} />
                            )}
                        />
                    </div>
                </div>
                <div className={cn(s.offers, s.grid)}>
                    {isLoading && <div className={s.loading}>Loading...</div>}
                    {!isLoading &&
                        trips?.length ?
                        trips.map((offer, idx) => {
                            return (
                                // @ts-ignore
                                <TripCard
                                    key={idx}
                                    {...offer}
                                />
                            )
                        }) : <div className={s.empty}>No options</div>}
                </div>
            </div>
        </Container>
    )
}