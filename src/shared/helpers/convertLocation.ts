import { LatLngExpression } from 'leaflet'

// value SRID=4326;POINT (23.800629 37.813474)
export const convertLocation = (value: string): LatLngExpression => {
  const stringArr = value?.replace('(', '').replace(')', '').split(' ')
  const coordinates = [+stringArr![2], +stringArr![1]] as LatLngExpression
  return coordinates
}
