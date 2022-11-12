import { GREECE_ID } from './destinations'

export const siteLinks = [
  { name: 'Home page', to: '/' },
  { name: 'Destination', to: `/destinations/areas/${GREECE_ID}` },
  { name: 'Trip planner', to: '/travel_planner' },
  { name: 'Hotels', to: `/destinations/hotels/${GREECE_ID}` },
  { name: 'Special offers', to: '/special_offers' },
  { name: 'Inspiration', to: '/blogs' },
  { name: 'About us', to: '/about' },
  { name: 'Careers', to: '/about/careers' },
  { name: 'Brochure', to: '/brochures' },
]
export const bottomLinks = [
  { name: 'Travel policy', to: '/terms' },
  { name: 'Car rental policy', to: '/terms' },
  { name: 'Travel policy', to: '/terms' },
  { name: 'Cookies policy', to: '/terms' },
  { name: 'Terms of use', to: '/terms' },
  { name: 'Privacy policy', to: '/terms' },
]

export const mainNavItems = [
  { name: 'Home', to: '/' },
  { name: 'About us', to: '/about' },
  { name: 'Brochure', to: '/brochures' },
]
