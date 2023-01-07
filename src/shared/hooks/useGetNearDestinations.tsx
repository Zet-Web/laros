export { }
// TODO this hook is obsolete
// import { useEffect, useState } from 'react'
// import { getNearDestinationsIds } from 'shared/api/routes/order'
// import { Destination } from 'shared/types/destinations'
// import { useAppSelector } from './redux'

// export const useGetNearDestinations = (destFrom: number): Destination[] => {
//   const [nearLocations, setNearLocations] = useState<number[]>([])
//   const destinations = useAppSelector((state) => state.destinations.destinations.filter((dest) => nearLocations.includes(dest.id)))

//   useEffect(() => {
//     const loadDestinations = async () => {
//       try {
//         const locationIds = await getNearDestinationsIds(destFrom)
//         setNearLocations(locationIds)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     loadDestinations()

//   }, [destFrom])

//   return destinations
// }
