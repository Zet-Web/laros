import Euboa from '/public/assets/images/destinations/Regions/Euboa.svg'
import Macedonia from '/public/assets/images/destinations/Regions/Macedonia.svg'
import Dodekannes from '/public/assets/images/destinations/Regions/Dodekannes.svg'
import Ionische from '/public/assets/images/destinations/Regions/Ionische.svg'
import Kykladen from '/public/assets/images/destinations/Regions/Kykladen.svg'
import Kreta from '/public/assets/images/destinations/Regions/Kreta.svg'
import Nordagaische from '/public/assets/images/destinations/Regions/Nordagaische.svg'
import Peloponnes from '/public/assets/images/destinations/Regions/Peloponnes.svg'
import Sporaden from '/public/assets/images/destinations/Regions/Sporaden.svg'
import Nordgriechenland from '/public/assets/images/destinations/Regions/Nordgriechenland.svg'

import Cyrpus from '/public/assets/images/destinations/Cyrpus.svg'
import Greece from '/public/assets/images/destinations/Greece.svg'

export const mockRegions = [
  {
    id: 11,
    name: 'Greece',
    image: Greece,
    regions: [
      { id: 1, image: Euboa, name: 'Euboa' },
      { id: 2, image: Sporaden, name: 'Sporaden' },
      { id: 3, image: Macedonia, name: 'Macedonia' },
      { id: 4, image: Ionische, name: 'Ionische' },
      { id: 5, image: Peloponnes, name: 'Peloponnes' },
      { id: 6, image: Nordgriechenland, name: 'Nordgriechenland' },
      { id: 7, image: Nordagaische, name: 'Nordagaische' },
      { id: 8, image: Kykladen, name: 'Kykladen' },
      { id: 9, image: Kreta, name: 'Kreta' },
      { id: 10, image: Dodekannes, name: 'Dodekannes' },
    ],
  },
  {
    id: 12,
    name: 'Cyrpus',
    image: Cyrpus,
  },
]
