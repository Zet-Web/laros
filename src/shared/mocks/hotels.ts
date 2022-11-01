import { Hotel, Room } from 'shared/types/hotel'
import { HotelCardProps } from 'features/HotelCard'
import { mockTags } from './tags'

export const roomMock: Room[] = [
  {
    id: 1,
    price: '1',
    room_name: 'Single room',
  },
  {
    id: 2,
    price: '2',
    room_name: 'Twin room',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    change_price: '4',
  },
  {
    id: 3,
    price: '2',
    room_name: 'Twin room',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    change_price: '4',
  },
]

export const mockHotels: Partial<Hotel>[] = [
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 1,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 2,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 3,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 4,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 5,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 6,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 7,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
  {
    name: 'Hotel Name',
    fromPrice: 41,
    period: 'Summer, 2022',
    id: 8,
    rating: 5,
    tags: mockTags,
    type: 'Type (Hotel/hostel ect)',
  },
]
