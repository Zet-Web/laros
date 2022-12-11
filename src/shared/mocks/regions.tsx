import EuboaIcon from '/public/assets/images/destinations/Regions/Euboa.svg'
import MacedoniaIcon from '/public/assets/images/destinations/Regions/Macedonia.svg'
import DodekannesIcon from '/public/assets/images/destinations/Regions/Dodekannes.svg'
import IonischeIcon from '/public/assets/images/destinations/Regions/Ionische.svg'
import KykladenIcon from '/public/assets/images/destinations/Regions/Kykladen.svg'
import KretaIcon from '/public/assets/images/destinations/Regions/Kreta.svg'
import PeloponnesIcon from '/public/assets/images/destinations/Regions/Peloponnes.svg'
import SporadenIcon from '/public/assets/images/destinations/Regions/Sporaden.svg'
import NordagaischeIcon from '/public/assets/images/destinations/Regions/Nordagaische.svg'
import MitteigriechenlandIcon from '/public/assets/images/destinations/Regions/Mitteigriechenland.svg'

import CyrpusIcon from '/public/assets/images/destinations/Cyrpus.svg'
import GreeceIcon from '/public/assets/images/destinations/Greece.svg'

import { Region } from 'shared/types/region'

import Greece from 'features/DestinationMaps/Greece/Greece'
import Cyrpus from 'features/DestinationMaps/Cyrpus/Cyrpus'

import Euboa from 'features/DestinationMaps/Euboa/Euboa'
import Sporaden from 'features/DestinationMaps/Sporaden/Sporaden'
import Macedonia from 'features/DestinationMaps/Macedonia/Macedonia'
import Ionische from 'features/DestinationMaps/Ionische/Ionische'
import Peloponnes from 'features/DestinationMaps/Peloponnes/Peloponnes'
import Kykladen from 'features/DestinationMaps/Kykladen/Kykladen'
import Kreta from 'features/DestinationMaps/Kreta/Kreta'
import Dodekannes from 'features/DestinationMaps/Dodekannes/Dodekannes'
import Mitteigriechenland from 'features/DestinationMaps/Mitteigriechenland/Mitteigriechenland'
import Nordagaische from 'features/DestinationMaps/Nordagaische/Nordagaische'

export const mockRegions: Region[] = [
  {
    id: 11,
    name: 'Greece',
    icon: GreeceIcon,
    map: <Greece />,
    subRegions: [
      {
        id: 1,
        icon: EuboaIcon,
        map: <Euboa />,
        subRegions: [],
        name: 'Euboa',
        parentId: 11,
      },
      {
        id: 2,
        icon: SporadenIcon,
        map: <Sporaden />,

        subRegions: [],
        name: 'Sporaden',
        parentId: 11,
      },
      {
        id: 3,
        icon: MacedoniaIcon,
        map: <Macedonia />,
        subRegions: [],
        name: 'Macedonia',
        parentId: 11,
      },
      {
        id: 4,
        icon: IonischeIcon,
        map: <Ionische />,
        subRegions: [],
        name: 'Ionische',
        parentId: 11,
      },
      {
        id: 5,
        icon: PeloponnesIcon,
        map: <Peloponnes />,
        subRegions: [],
        name: 'Peloponnes',
        parentId: 11,
      },
      {
        id: 6,
        icon: MitteigriechenlandIcon,
        map: <Mitteigriechenland />,
        subRegions: [],
        name: 'Mitteigriechenland',
        parentId: 11,
      },
      {
        id: 7,
        icon: NordagaischeIcon,
        map: <Nordagaische />,
        subRegions: [],
        name: 'Nordagaische',
        parentId: 11,
      },
      {
        id: 8,
        icon: KykladenIcon,
        map: <Kykladen />,
        subRegions: [],
        name: 'Kykladen',
        parentId: 11,
      },
      {
        id: 9,
        icon: KretaIcon,
        map: <Kreta />,
        subRegions: [],
        name: 'Kreta',
        parentId: 11,
      },
      {
        id: 10,
        icon: DodekannesIcon,
        map: <Dodekannes />,
        subRegions: [],
        name: 'Dodekannes',
        parentId: 11,
      },
    ],
    parentId: null,
  },
  {
    id: 12,
    name: 'Cyrpus',
    icon: CyrpusIcon,
    subRegions: [],
    map: <Cyrpus />,
    parentId: null,
  },
  {
    id: 1,
    icon: EuboaIcon,
    map: <Euboa />,
    subRegions: [],
    name: 'Euboa',
    parentId: 11,
  },
  {
    id: 2,
    icon: SporadenIcon,
    map: <Sporaden />,
    name: 'Sporaden',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 3,
    icon: MacedoniaIcon,
    map: <Macedonia />,
    name: 'Macedonia',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 4,
    icon: IonischeIcon,
    map: <Ionische />,
    name: 'Ionische',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 5,
    icon: PeloponnesIcon,
    map: <Peloponnes />,
    name: 'Peloponnes',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 6,
    icon: MitteigriechenlandIcon,
    map: <Mitteigriechenland />,
    name: 'Mitteigriechenland',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 7,
    icon: NordagaischeIcon,
    map: <Nordagaische />,
    name: 'Nordagaische',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 8,
    icon: KykladenIcon,
    map: <Kykladen />,
    name: 'Kykladen',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 9,
    icon: KretaIcon,
    map: <Kreta />,
    name: 'Kreta',
    parentId: 11,
    subRegions: [],
  },
  {
    id: 10,
    icon: DodekannesIcon,
    map: <Dodekannes />,
    name: 'Dodekannes',
    parentId: 11,
    subRegions: [],
  },
]
