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
  { name: 'Travel policy', to: '/terms/0' },
  { name: 'Car rental policy', to: '/terms/1' },
  { name: 'Cookies policy', to: '/terms/2' },
  { name: 'Terms of use', to: '/terms/3' },
  { name: 'Privacy policy', to: '/terms/4' },
]

export const mainNavItems = [
  { name: 'Home', to: '/' },
  { name: 'About us', to: '/about' },
  { name: 'Brochure', to: '/brochures' },
]
