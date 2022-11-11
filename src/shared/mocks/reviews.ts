import { Review } from 'shared/types/review'
import Boat from '/public/assets/images/testimonials/boat.png'
import Donkey from '/public/assets/images/testimonials/donkey.png'
import Tree from '/public/assets/images/testimonials/tree.png'
import ava from '/public/assets/images/blogs/Ellipse 24.svg'
import ava2 from '/public/assets/images/blogs/Ellipse 24 (1).svg'

export const reviewsMock: Review[] = [
  {
    id: 0,
    avatar: ava,
    name: 'Darlene Robertson',
    tripname: 'Trip name',
    text:
      'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla. Integer quam sit lectus scelerisque porttitor. Facilisis dolor justo, ut non non in facilisis consectetur. Nec commodo eget in pharetra. \n' +
      '\n' +
      'Viverra nec sagittis odio nunc sed. Facilisis sit ultrices quisque proin purus porta blandit aenean. Eu vitae morbi pretium varius vel cursus nec. Cras commodo sed mi gravida tincidunt facilisis posuere mauris. Feugiat quam eleifend nulla justo, neque, aliquam. Ac dolor tortor vel in facilisi amet, tempus aliquet et.',
  },
  {
    id: 1,
    avatar: ava2,
    name: 'Kathryn Murphy',
    tripname: 'Trip name',
    text: 'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla. Integer quam sit lectus scelerisque porttitor. Facilisis dolor justo, ut non non in facilisis consectetur. Nec commodo eget in pharetra.',
  },
  {
    id: 2,
    avatar: ava,
    name: 'Devon Lane',
    tripname: 'Trip name',
    images: [Donkey, Boat, Tree],
    text:
      'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla. Integer quam sit lectus scelerisque porttitor. Facilisis dolor justo, ut non non in facilisis consectetur. Nec commodo eget in pharetra.\n' +
      'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla.',
  },
  {
    id: 4,
    avatar: ava,
    name: 'Darlene Robertson',
    tripname: 'Trip name',
    text:
      'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla. Integer quam sit lectus scelerisque porttitor. Facilisis dolor justo, ut non non in facilisis consectetur. Nec commodo eget in pharetra. \n' +
      '\n' +
      'Viverra nec sagittis odio nunc sed. Facilisis sit ultrices quisque proin purus porta blandit aenean. Eu vitae morbi pretium varius vel cursus nec. Cras commodo sed mi gravida tincidunt facilisis posuere mauris. Feugiat quam eleifend nulla justo, neque, aliquam. Ac dolor tortor vel in facilisi amet, tempus aliquet et.',
  },
  {
    id: 5,
    avatar: ava2,
    name: 'Kathryn Murphy',
    tripname: 'Trip name',
    text: 'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla. Integer quam sit lectus scelerisque porttitor. Facilisis dolor justo, ut non non in facilisis consectetur. Nec commodo eget in pharetra.',
  },
  {
    id: 6,
    avatar: ava,
    name: 'Devon Lane',
    tripname: 'Trip name',
    images: [Donkey, Boat, Tree],
    text:
      'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla. Integer quam sit lectus scelerisque porttitor. Facilisis dolor justo, ut non non in facilisis consectetur. Nec commodo eget in pharetra.\n' +
      'Lacus, purus pharetra, turpis at. Fermentum, erat diam velit fringilla.',
  },
]
