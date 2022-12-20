import { Review } from 'shared/types/review'
import Boat from '/public/assets/images/testimonials/boat.png'
import Donkey from '/public/assets/images/testimonials/donkey.png'
import Tree from '/public/assets/images/testimonials/tree.png'
import ava from '/public/assets/images/blogs/Ellipse 24.svg'
import ava2 from '/public/assets/images/blogs/Ellipse 24 (1).svg'

export const reviewsMock: Review[] = [
  {
    id: 1,
    avatar: ava,
    name: 'homepage.aboutUsCardName_1',
    tripname: 'homepage.aboutUsCardSubName_1',
    text: 'homepage.aboutUsCardText_1',
  },
  {
    id: 2,
    avatar: ava2,
    name: 'homepage.aboutUsCardName_2',
    tripname: 'homepage.aboutUsCardSubName_2',
    text: 'homepage.aboutUsCardText_2',
  },
  {
    id: 3,
    avatar: ava,
    name: 'homepage.aboutUsCardName_1',
    tripname: 'homepage.aboutUsCardSubName_1',
    text: 'homepage.aboutUsCardText_1',
    images: [Donkey, Boat, Tree],
  },
  {
    id: 4,
    avatar: ava,
    name: 'homepage.aboutUsCardName_1',
    tripname: 'homepage.aboutUsCardSubName_1',
    text: 'homepage.aboutUsCardText_1',
  },
  {
    id: 5,
    avatar: ava2,
    name: 'homepage.aboutUsCardName_2',
    tripname: 'homepage.aboutUsCardSubName_2',
    text: 'homepage.aboutUsCardText_2',
  },
  {
    id: 6,
    avatar: ava,
    name: 'homepage.aboutUsCardName_1',
    tripname: 'homepage.aboutUsCardSubName_1',
    text: 'homepage.aboutUsCardText_1',
    images: [Donkey, Boat, Tree],
  },

]
