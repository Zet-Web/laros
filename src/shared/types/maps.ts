import { ReactNode } from 'react'

export interface Map {
  id: number
  link: string
  cartTitle: string
  cartText: string
  image?: any //FIXME
  region?: ReactNode
}

export interface Maps {
  Greece: Map[]
  Cyrpus: Map[]
  Macedonia: Map[]
  Sporaden: Map[]
  Nordagaische: Map[]
  Mitteigriechenland: Map[]
  Euboa: Map[]
  Ionische: Map[]
  Peloponnes: Map[]
  Kykladen: Map[]
  Dodekannes: Map[]
  Kreta: Map[]
}
