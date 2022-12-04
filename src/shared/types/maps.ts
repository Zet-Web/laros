export interface Location {
  id: number
  link: string
  cardTitle: string
  cardText: string
  image?: any //FIXME
}

export interface Locations {
  Greece: Location[]
  Cyrpus: Location[]
  Macedonia: Location[]
  Sporaden: Location[]
  Nordagaische: Location[]
  Mitteigriechenland: Location[]
  Euboa: Location[]
  Ionische: Location[]
  Peloponnes: Location[]
  Kykladen: Location[]
  Dodekannes: Location[]
  Kreta: Location[]
}
