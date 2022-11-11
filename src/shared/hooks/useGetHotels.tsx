import { useEffect, useState } from 'react'
import { getHotels } from 'shared/api/routes/hotels'
import { Hotel, HotelFilterParams } from 'shared/types/hotel'

export const useGetHotels = (
    query: Partial<HotelFilterParams>
): [Hotel[], boolean, (reset?: boolean) => void] => {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const handleReady = (reset?: boolean) => {
        setIsReady(true)
    }
    useEffect(() => {
        const loadHotels = async () => {
            setIsReady(false)
            try {
                setIsLoading(true)
                const { data } = await getHotels(query)
                setHotels(data.data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        if (isReady) loadHotels()
    }, [isReady, query])

    return [hotels, isLoading, handleReady]
}
