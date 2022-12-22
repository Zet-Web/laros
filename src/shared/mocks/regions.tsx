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
    id: 17,
    name: 'Greece',
    icon: GreeceIcon,
    map: () => <Greece />,
    subRegions: [
      {
        id: 20,
        icon: EuboaIcon,
        map: location => <Euboa location={location!} />,
        subRegions: [],
        name: 'Euboa',
        parentId: 17,
      },
      {
        id: 28,
        icon: SporadenIcon,
        map: location => <Sporaden location={location!} />,
        subRegions: [],
        name: 'Sporaden',
        parentId: 17,
      },
      {
        id: 25,
        icon: MacedoniaIcon,
        map: location => <Macedonia location={location!} />,
        subRegions: [],
        name: 'Macedonia',
        parentId: 17,
      },
      {
        id: 22,
        icon: IonischeIcon,
        map: location => <Ionische location={location!} />,
        subRegions: [],
        name: 'Ionische',
        parentId: 17,
      },
      {
        id: 27,
        icon: PeloponnesIcon,
        map: location => <Peloponnes location={location!} />,
        subRegions: [],
        name: 'Peloponnes',
        parentId: 17,
      },
      {
        id: 24,
        icon: MitteigriechenlandIcon,
        map: location => <Mitteigriechenland location={location!} />,
        subRegions: [],
        name: 'Mitteigriechenland',
        parentId: 17,
      },
      {
        id: 26,
        icon: NordagaischeIcon,
        map: location => <Nordagaische location={location!} />,
        subRegions: [],
        name: 'Nordagaische',
        parentId: 17,
      },
      {
        id: 23,
        icon: KykladenIcon,
        map: location => <Kykladen location={location!} />,
        subRegions: [],
        name: 'Kykladen',
        parentId: 17,
      },
      {
        id: 21,
        icon: KretaIcon,
        map: location => <Kreta location={location!} />,
        subRegions: [],
        name: 'Kreta',
        parentId: 17,
      },
      {
        id: 19,
        icon: DodekannesIcon,
        map: location => <Dodekannes location={location!} />,
        subRegions: [],
        name: 'Dodekannes',
        parentId: 17,
      },
    ],
    parentId: null,
  },
  {
    id: 18,
    name: 'Cyrpus',
    icon: CyrpusIcon,
    subRegions: [],
    map: location => <Cyrpus location={location!} />,
    parentId: null,
  },
  {
    id: 20,
    icon: EuboaIcon,
    map: location => <Euboa location={location!} />,
    subRegions: [],
    name: 'Euboa',
    parentId: 17,
  },
  {
    id: 28,
    icon: SporadenIcon,
    map: location => <Sporaden location={location!} />,
    subRegions: [],
    name: 'Sporaden',
    parentId: 17,
  },
  {
    id: 25,
    icon: MacedoniaIcon,
    map: location => <Macedonia location={location!} />,
    subRegions: [],
    name: 'Macedonia',
    parentId: 17,
  },
  {
    id: 22,
    icon: IonischeIcon,
    map: location => <Ionische location={location!} />,
    subRegions: [],
    name: 'Ionische',
    parentId: 17,
  },
  {
    id: 27,
    icon: PeloponnesIcon,
    map: location => <Peloponnes location={location!} />,
    subRegions: [],
    name: 'Peloponnes',
    parentId: 17,
  },
  {
    id: 24,
    icon: MitteigriechenlandIcon,
    map: location => <Mitteigriechenland location={location!} />,
    subRegions: [],
    name: 'Mitteigriechenland',
    parentId: 17,
  },
  {
    id: 26,
    icon: NordagaischeIcon,
    map: location => <Nordagaische location={location!} />,
    subRegions: [],
    name: 'Nordagaische',
    parentId: 17,
  },
  {
    id: 23,
    icon: KykladenIcon,
    map: location => <Kykladen location={location!} />,
    subRegions: [],
    name: 'Kykladen',
    parentId: 17,
  },
  {
    id: 21,
    icon: KretaIcon,
    map: location => <Kreta location={location!} />,
    subRegions: [],
    name: 'Kreta',
    parentId: 17,
  },
  {
    id: 19,
    icon: DodekannesIcon,
    map: location => <Dodekannes location={location!} />,
    subRegions: [],
    name: 'Dodekannes',
    parentId: 17,
  },
]
