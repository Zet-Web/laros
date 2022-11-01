import { FeatureCollection } from 'geojson'
import { PointExpression } from 'leaflet'

export interface Route {
  type: 'FeatureCollection'
  properties: {
    iconAnchor: PointExpression
    iconColor: string
    iconSize: PointExpression
    iconUrl: string
    opacity: number
    popupAnchor: PointExpression
  }
  features: Array<{
    type: 'Feature'
    properties: FeatureCollection
    geometry: { type: string; coordinates: number[] }
  }>
}

export interface IconProperty {
  iconAnchor: PointExpression
  iconColor: string
  iconSize: PointExpression
  iconUrl: string
  opacity: number
  popupAnchor: PointExpression
}
