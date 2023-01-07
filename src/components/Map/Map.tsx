import React, { useEffect, useState } from 'react'

import L, { Icon, LatLng, LatLngExpression, Layer } from 'leaflet'

import s from './Map.module.scss'

import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'

import {
  MapContainer,
  TileLayer,
  ZoomControl,
  GeoJSON,
  FeatureGroup,
  Marker,
} from 'react-leaflet'

import { Feature, GeoJsonObject, Point } from 'geojson'
import { IconProperty, Route } from './types'

import mapPin from '/public/assets/images/map-pin-marker.svg?url'
import { convertLocation } from 'shared/helpers/convertLocation'

const icon = new Icon({
  iconUrl: mapPin,
  iconSize: [35, 90],
})

interface MapProps {
  route?: string
  additionalRoutes?: string
  location?: string
}

const Map: React.FC<MapProps> = ({
  route: routeString,
  additionalRoutes: additionalRoutesString,
  location: locationString,
}) => {
  const [route, setRoute] = useState<Route>()
  const [additionalRoutes, setAdditionalRoutes] = useState<Route>()
  const [location, setLocation] = useState<LatLngExpression>()
  const [center, setCenter] = useState<LatLngExpression>()

  useEffect(() => {
    if (!locationString) return
    const coordinates = convertLocation(locationString)
    setLocation(coordinates)
    setCenter(coordinates)
  }, [locationString])

  useEffect(() => {
    if (!routeString) return
    setRoute(JSON.parse(routeString))
  }, [routeString])

  useEffect(() => {
    if (additionalRoutesString) {
      setAdditionalRoutes(JSON.parse(additionalRoutesString))
    }
  }, [additionalRoutesString])

  useEffect(() => {
    if (!route?.features[0]?.geometry?.coordinates) return
    if (locationString) return

    const coordinates = route.features[0].geometry.coordinates
    setCenter(
      ([coordinates[0], coordinates[1]] = [coordinates[1], coordinates[0]])
    )
  }, [route])

  const pointToLayer = (
    center: Feature<Point, IconProperty>,
    latlng: LatLng
  ): Layer => {
    const { iconAnchor, iconColor, iconSize, iconUrl, opacity, popupAnchor } =
      center.properties

    return L.marker(latlng, {
      icon: new Icon({
        iconAnchor: iconAnchor,
        iconColor: iconColor,
        iconSize: iconSize,
        iconUrl: iconUrl,
        opacity: opacity,
        popupAnchor: popupAnchor,
      }),
    })
  }

  return (
    <>
      {center ? (
        <MapContainer
          className={s.map}
          fullscreenControl={true}
          center={center}
          zoom={12}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <FeatureGroup>
            {route?.features.map((feature: GeoJsonObject, i: number) => (
              <GeoJSON pointToLayer={pointToLayer} key={i} data={feature} />
            ))}
            {additionalRoutes?.features.map(
              (feature: GeoJsonObject, i: number) => (
                <GeoJSON pointToLayer={pointToLayer} key={i} data={feature} />
              )
            )}
          </FeatureGroup>
          {location ? <Marker position={location} icon={icon} /> : null}
          <ZoomControl position='topright' />
        </MapContainer>
      ) : null}
    </>
  )
}

export default Map
