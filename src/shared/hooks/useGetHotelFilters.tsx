import { useEffect, useState } from 'react'

import { getHotelTags } from 'shared/api/routes/hotels'
import { Meta, Option } from 'shared/types'
import { getCategories } from 'shared/api/routes/category'
import { getAccommodations } from 'shared/api/routes/accommodation'

export const useGetHotelFilters = (): [
  Meta[],
  Option[],
  Option[],
  () => void
] => {
  const [tags, setTags] = useState<Meta[]>([])
  const [categories, setCategories] = useState<Option[]>([])
  const [accommodations, setAccommodations] = useState<Option[]>([])
  const [isReady, setIsReady] = useState<boolean>(true)

  const handleReady = () => {
    setIsReady(true)
  }

  useEffect(() => {
    const getFilters = async () => {
      setIsReady(false)

      try {
        const tags = await getHotelTags()
        setTags(tags.data.data)
      } catch (error) {
        console.error(error)
      }
      try {
        const categories = await getCategories()
        setCategories(
          categories.data.data.map(category => ({
            value: category.id.toString(),
            label: category.name,
            icon: '',
          }))
        )
      } catch (error) {
        console.error(error)
      }
      try {
        const accommodations = await getAccommodations()
        setAccommodations(
          accommodations.data.data.map(category => ({
            value: category.id.toString(),
            label: category.name,
            icon: '',
          }))
        )
      } catch (error) {
        console.error(error)
      }
    }

    if (isReady) getFilters()
  }, [isReady])

  return [tags, categories, accommodations, handleReady]
}
