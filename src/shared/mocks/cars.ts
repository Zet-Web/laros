import { Car } from 'shared/types/car'
import carPhoto from '/public/assets/images/carPhoto.svg'
export const carsMock: Car[] = [
  {
    id: 1,
    model: 'Pegeot',
    group: 'A',
    image: carPhoto,
    capacity: 5,
    luggage: 2,
    price: 100,
    description:
      'Sed mauris tincidunt justo malesuada pharetra, viverra in arcu ultrices. Donec aliquam nulla massa viverra aliquam diam ac leo.',
    from_dest_name: 'Greece',
    to_dest_name: 'Cyprus',
    from_dest: 1, // id city
    to_dest: 2, // id city
  },
  {
    id: 2,
    image: carPhoto,
    model: 'Kio',
    group: 'B',
    price: 100,

    description:
      'Sed mauris tincidunt justo malesuada pharetra, viverra in arcu ultrices. Donec aliquam nulla massa viverra aliquam diam ac leo.',
  },
  {
    id: 3,
    image: carPhoto,
    model: 'Pegeot',
    group: 'B',
    price: 100,
    description:
      'Sed mauris tincidunt justo malesuada pharetra, viverra in arcu ultrices. Donec aliquam nulla massa viverra aliquam diam ac leo.',
  },
]
