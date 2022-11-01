import { Maps } from 'shared/types/maps'

import Macedonia from 'features/DestinationMaps/Macedonia/Macedonia'
import Sporaden from 'features/DestinationMaps/Sporaden/Sporaden'

import SubGr from '/public/assets/images/destinations/Greece/1.svg'
import SubGr2 from '/public/assets/images/destinations/Greece/2.svg'
import SubGr3 from '/public/assets/images/destinations/Greece/10.svg'
import SubGr4 from '/public/assets/images/destinations/Greece/8.svg'
import SubGr5 from '/public/assets/images/destinations/Greece/3.svg'
import SubGr7 from '/public/assets/images/destinations/Greece/9.svg'
import SubGr6 from '/public/assets/images/destinations/Greece/7.svg'
import SubGr8 from '/public/assets/images/destinations/Greece/6.svg'
import SubGr9 from '/public/assets/images/destinations/Greece/4.svg'
import SubGr10 from '/public/assets/images/destinations/Greece/5.svg'
import Euboa from '../../features/DestinationMaps/Euboa/Euboa'
import Peloponnes from '../../features/DestinationMaps/Peloponnes/Peloponnes'
import Mitteigriechenland from '../../features/DestinationMaps/Mitteigriechenland/Mitteigriechenland'
import Ionische from '../../features/DestinationMaps/Ionische/Ionische'
import Nordagaische from '../../features/DestinationMaps/Nordagaische/Nordagaische'
import Kykladen from '../../features/DestinationMaps/Kykladen/Kykladen'
import Kreta from '../../features/DestinationMaps/Kreta/Kreta'
import Dodekannes from '../../features/DestinationMaps/Dodekannes/Dodekannes'

export const mockMaps: Maps = {
  Greece: [
    {
      id: 1,
      link: 'destinations/lonian-islands',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr,
      region: <Euboa />,
    },
    {
      id: 2,
      link: 'destinations/nibn-sagittis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr2,
      region: <Sporaden />,
    },
    {
      id: 3,
      link: 'destinations/macedonia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr3,
      region: <Macedonia />,
    },
    {
      id: 4,
      link: 'destinations/elti-molestie',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr4,
      region: <Ionische />,
    },
    {
      id: 5,
      link: 'destinations/elti-molestie',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr5,
      region: <Peloponnes />,
    },
    {
      id: 6,
      link: 'destinations/attica',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr6,
      region: <Mitteigriechenland />,
    },
    {
      id: 7,
      link: 'destinations/aegean',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr7,
      region: <Nordagaische />,
    },
    {
      id: 8,
      link: 'destinations/cyclades',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr8,
      region: <Kykladen />,
    },
    {
      id: 9,
      link: 'destinations/crete',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr9,
      region: <Kreta />,
    },
    {
      id: 10,
      link: 'destinations/macedonia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr10,
      region: <Dodekannes />,
    },
  ],
  Cyrpus: [
    {
      id: 1,
      link: 'destinations/polis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Polis',
    },
    {
      id: 2,
      link: 'destinations/goudi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Goudi',
    },
    {
      id: 3,
      link: 'destinations/lysos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lysos',
    },
    {
      id: 4,
      link: 'destinations/miliou',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Miliou',
    },
    {
      id: 5,
      link: 'destinations/paphos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Paphos',
    },
    {
      id: 6,
      link: 'destinations/omodos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Omodos',
    },
    {
      id: 7,
      link: 'destinations/kakopetria',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kakopetria',
    },
    {
      id: 8,
      link: 'destinations/kalavassos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kalavassos',
    },
    {
      id: 9,
      link: 'destinations/lemessos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lemesso',
    },
    {
      id: 10,
      link: 'destinations/tochni',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Tochni',
    },
    {
      id: 11,
      link: 'destinations/chirokita',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Chirokita',
    },
    {
      id: 12,
      link: 'destinations/lefkosia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lefkosia',
    },
    {
      id: 13,
      link: 'destinations/larnaca',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Larnaca',
    },
    {
      id: 14,
      link: 'destinations/agia-napa',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Agia Napa',
    },
  ],
  Macedonia: [
    {
      id: 1,
      link: 'destinations/vergina',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Vergina',
    },
    {
      id: 2,
      link: 'destinations/kastoria',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kastoria',
    },
    {
      id: 3,
      link: 'destinations/sirerochori',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Sirerochori',
    },
    {
      id: 4,
      link: 'destinations/nimfeo',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Nimfeo',
    },
    {
      id: 5,
      link: 'destinations/lemos-florina',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lemos Florina',
    },
    {
      id: 6,
      link: 'destinations/litochoro',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Litochoro',
    },
    {
      id: 7,
      link: 'destinations/loutraki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Loutraki',
    },
    {
      id: 8,
      link: 'destinations/name',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Name',
    },
    {
      id: 9,
      link: 'destinations/stavroupolis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Stavroupolis',
    },
    {
      id: 10,
      link: 'destinations/thessaloniki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Thessaloniki',
    },
    {
      id: 11,
      link: 'destinations/chalkidki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Chalkidki',
    },
    {
      id: 12,
      link: 'destinations/stavroupoli',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Stavroupoli',
    },
    {
      id: 13,
      link: 'destinations/berg-athos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Berg Athos',
    },
    {
      id: 14,
      link: 'destinations/kerkini',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kerkini',
    },
    {
      id: 15,
      link: 'destinations/kavala',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kavala',
    },
    {
      id: 16,
      link: 'destinations/xanthi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Xanthi',
    },
    {
      id: 17,
      link: 'destinations/komotini',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Komotini',
    },
    {
      id: 18,
      link: 'destinations/maronia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Maronia',
    },
    {
      id: 19,
      link: 'destinations/alexandropolis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Alexandropolis',
    },
    {
      id: 20,
      link: 'destinations/dadia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Dadia',
    },
    {
      id: 21,
      link: 'destinations/afytos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Afytos',
    },
  ],
  Sporaden: [
    {
      id: 1,
      link: 'destinations/igoumenitsa',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Igoumenitsa',
    },
    {
      id: 2,
      link: 'destinations/artisti',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Artisti',
    },
    {
      id: 3,
      link: 'destinations/ioannina',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ioannina',
    },
    {
      id: 4,
      link: 'destinations/parga',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Parga',
    },
    {
      id: 5,
      link: 'destinations/ammoudia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ammoudia',
    },
    {
      id: 6,
      link: 'destinations/elati',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Elati',
    },
    {
      id: 7,
      link: 'destinations/kastraki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kastraki',
    },
    {
      id: 8,
      link: 'destinations/makrinitsa',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Makrinitsa',
    },
    {
      id: 9,
      link: 'destinations/volos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Volos',
    },
    {
      id: 10,
      link: 'destinations/portaria',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Portaria',
    },
    {
      id: 11,
      link: 'destinations/zagora',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Zagora',
    },
    {
      id: 12,
      link: 'destinations/vizitsa',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Vizitsa',
    },
    {
      id: 13,
      link: 'destinations/nafpaktos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Nafpaktos',
    },
    {
      id: 14,
      link: 'destinations/delphi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Delphi',
    },
    {
      id: 15,
      link: 'destinations/athen',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Athen',
    },
  ],
  Nordagaische: [
    {
      id: 1,
      link: 'destinations/thassos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Thassos',
    },
    {
      id: 2,
      link: 'destinations/samothrake',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Samothrake',
    },
    {
      id: 3,
      link: 'destinations/lemmos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lemmos',
    },
    {
      id: 4,
      link: 'destinations/fourni',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Fourni',
    },
    {
      id: 5,
      link: 'destinations/lesbos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lesbos (Mytilene)',
    },
    {
      id: 6,
      link: 'destinations/chios',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Chios',
    },
    {
      id: 7,
      link: 'destinations/ikaria',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ikaria',
    },
    {
      id: 8,
      link: 'destinations/samos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Samos',
    },
  ],
  Mitteigriechenland: [
    {
      id: 1,
      link: 'destinations/revies',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Revies',
    },
    {
      id: 2,
      link: 'destinations/kymi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kymi',
    },
    {
      id: 3,
      link: 'destinations/karistos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Karistos',
    },
  ],
  Euboa: [
    {
      id: 1,
      link: 'destinations/korfu',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Korfu',
    },
    {
      id: 2,
      link: 'destinations/paxos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Paxos',
    },
    {
      id: 3,
      link: 'destinations/lefkada',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lefkada',
    },
    {
      id: 4,
      link: 'destinations/ithaki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ithaki',
    },
    {
      id: 5,
      link: 'destinations/kefalonia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kefalonia',
    },
    {
      id: 6,
      link: 'destinations/zakynthos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Zakynthos',
    },
  ],
  Ionische: [
    {
      id: 1,
      link: 'destinations/skiathos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Skiathos',
    },
    {
      id: 2,
      link: 'destinations/alonissos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Alonissos',
    },
    {
      id: 3,
      link: 'destinations/skopelos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Skopelos',
    },
    {
      id: 4,
      link: 'destinations/skyros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Skyros',
    },
  ],
  Peloponnes: [
    {
      id: 1,
      link: 'destinations/patras',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Patras',
    },
    {
      id: 2,
      link: 'destinations/kalogria',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kalogria',
    },
    {
      id: 3,
      link: 'destinations/lechaio',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lechaio',
    },
    {
      id: 4,
      link: 'destinations/korinth',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Korinth',
    },
    {
      id: 5,
      link: 'destinations/olympia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Olympia',
    },
    {
      id: 6,
      link: 'destinations/vitina',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Vitina',
    },
    {
      id: 7,
      link: 'destinations/napflio',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Napflio',
    },
    {
      id: 8,
      link: 'destinations/altEpidaurus',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Alt Epidaurus',
    },
    {
      id: 9,
      link: 'destinations/kalamata',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kalamata',
    },
    {
      id: 10,
      link: 'destinations/sparta',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Sparta',
    },
    {
      id: 11,
      link: 'destinations/mystras',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Mystras',
    },
    {
      id: 12,
      link: 'destinations/leonidio',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Leonidio',
    },
    {
      id: 13,
      link: 'destinations/charnoi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Charnoi',
    },
    {
      id: 14,
      link: 'destinations/marathopolis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Marathopolis',
    },
    {
      id: 15,
      link: 'destinations/gialova',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Gialova',
    },
    {
      id: 16,
      link: 'destinations/methoni',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Methoni',
    },
    {
      id: 17,
      link: 'destinations/aeropolis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Aeropolis',
    },
    {
      id: 18,
      link: 'destinations/gerolimenas',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Gerolimenas',
    },
    {
      id: 19,
      link: 'destinations/itilo',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Itilo',
    },
    {
      id: 20,
      link: 'destinations/gythionMavrovouni',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Gythion Mavrovouni',
    },
    {
      id: 21,
      link: 'destinations/monemvassia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Monemvassia',
    },
    {
      id: 22,
      link: 'destinations/elafonisos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Elafonisos',
    },
  ],
  Kykladen: [
    {
      id: 1,
      link: 'destinations/kea',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kea',
    },
    {
      id: 2,
      link: 'destinations/andros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Andros',
    },
    {
      id: 3,
      link: 'destinations/tinos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Tinos',
    },
    {
      id: 4,
      link: 'destinations/kithnos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kithnos',
    },
    {
      id: 5,
      link: 'destinations/mykonos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Mykonos',
    },
    {
      id: 6,
      link: 'destinations/serifos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Serifos',
    },
    {
      id: 7,
      link: 'destinations/syros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Syros',
    },
    {
      id: 8,
      link: 'destinations/paros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Paros',
    },
    {
      id: 9,
      link: 'destinations/serifos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Serifos',
    },
    {
      id: 10,
      link: 'destinations/naxos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Naxos',
    },
    {
      id: 11,
      link: 'destinations/sifnos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Sifnos',
    },
    {
      id: 12,
      link: 'destinations/antiparos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Antiparos',
    },
    {
      id: 13,
      link: 'destinations/koufonissi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Koufonissi',
    },
    {
      id: 14,
      link: 'destinations/kimolos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kimolos',
    },
    {
      id: 15,
      link: 'destinations/milos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Milos',
    },
    {
      id: 16,
      link: 'destinations/folegandros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Folegandros',
    },
    {
      id: 17,
      link: 'destinations/santorini',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Santorini',
    },
    {
      id: 18,
      link: 'destinations/ios',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ios',
    },
    {
      id: 19,
      link: 'destinations/anafi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Anafi',
    },
    {
      id: 20,
      link: 'destinations/santorini',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Santorini',
    },
    {
      id: 21,
      link: 'destinations/amorgos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Amorgos',
    },
    {
      id: 22,
      link: 'destinations/koufonissi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Koufonissi',
    },
  ],
  Dodekannes: [
    {
      id: 1,
      link: 'destinations/agathonissi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Agathonissi',
    },
    {
      id: 2,
      link: 'destinations/arki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Arki',
    },
    {
      id: 3,
      link: 'destinations/patmos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Patmos',
    },
    {
      id: 4,
      link: 'destinations/lipsi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lipsi',
    },
    {
      id: 5,
      link: 'destinations/leros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Leros',
    },
    {
      id: 6,
      link: 'destinations/kalymnos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kalymnos',
    },
    {
      id: 7,
      link: 'destinations/kos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kos',
    },
    {
      id: 8,
      link: 'destinations/nissiros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Nissiros',
    },
    {
      id: 9,
      link: 'destinations/astypalea',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Astypalea',
    },
    {
      id: 10,
      link: 'destinations/tilos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Tilos',
    },
    {
      id: 11,
      link: 'destinations/symi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Symi',
    },
    {
      id: 12,
      link: 'destinations/chalki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Chalki',
    },
    {
      id: 13,
      link: 'destinations/rhodos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Rhodos',
    },
    {
      id: 14,
      link: 'destinations/karpathos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Karpathos',
    },
    {
      id: 15,
      link: 'destinations/kasos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kasos',
    },
    {
      id: 16,
      link: 'destinations/kastelorizo',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kastelorizo',
    },
  ],
  Kreta: [
    {
      id: 1,
      link: 'destinations/falasarna',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Falasarna',
    },
    {
      id: 2,
      link: 'destinations/agiaMarina',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Agia Marina',
    },
    {
      id: 3,
      link: 'destinations/paleochora',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Paleochora',
    },
    {
      id: 4,
      link: 'destinations/frangokastello',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Frangokastello',
    },
    {
      id: 5,
      link: 'destinations/georgioupolis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Georgioupolis',
    },
    {
      id: 6,
      link: 'destinations/chania',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Chania',
    },
    {
      id: 7,
      link: 'destinations/katoStalos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kato Stalos',
    },
    {
      id: 8,
      link: 'destinations/apokotronas',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Apokotronas',
    },
    {
      id: 9,
      link: 'destinations/rethymnon',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Rethymnon',
    },
    {
      id: 10,
      link: 'destinations/almyrida',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Almyrida',
    },
    {
      id: 11,
      link: 'destinations/rodakino',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Rodakino',
    },
    {
      id: 12,
      link: 'destinations/sfakakai',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Sfakakai',
    },
    {
      id: 13,
      link: 'destinations/panormos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Panormos',
    },
    {
      id: 14,
      link: 'destinations/agiaGalini',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Agia Galini',
    },
    {
      id: 15,
      link: 'destinations/kalamaki',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kalamaki',
    },
    {
      id: 16,
      link: 'destinations/zaros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Zaros',
    },
    {
      id: 17,
      link: 'destinations/kapetantana',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kapetantana',
    },
    {
      id: 18,
      link: 'destinations/archanes',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Archanes',
    },
    {
      id: 19,
      link: 'destinations/herakliton',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Herakliton',
    },
    {
      id: 20,
      link: 'destinations/ierapetra',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ierapetra',
    },
    {
      id: 21,
      link: 'destinations/anatoli',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Anatoli',
    },
    {
      id: 22,
      link: 'destinations/ferma',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Ferma',
    },
    {
      id: 23,
      link: 'destinations/rounda',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Rounda',
    },
    {
      id: 24,
      link: 'destinations/makrigialos-Analipsi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Makrigialos Analipsi',
    },
    {
      id: 25,
      link: 'destinations/sitia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Sitia',
    },
    {
      id: 26,
      link: 'destinations/kodremenos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kodremenos',
    },
    {
      id: 27,
      link: 'destinations/katoZakros',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kato Zakros',
    },
  ],
}
