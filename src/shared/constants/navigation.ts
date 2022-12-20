import { GREECE_ID } from './destinations'

export const siteLinks = [
  { name: 'navigation.footer.link1', to: '/' },
  { name: 'navigation.footer.link2', to: `/destinations/areas/${GREECE_ID}` },
  { name: 'navigation.footer.link3', to: '/travel_planner' },
  { name: 'navigation.footer.link4', to: `/destinations/hotels/${GREECE_ID}` },
  { name: 'navigation.footer.link5', to: '/special_offers' },
  { name: 'navigation.footer.link6', to: '/blogs' },
  { name: 'navigation.footer.link7', to: '/about' },
  { name: 'navigation.footer.link8', to: '/about/careers' },
  { name: 'navigation.footer.link9', to: '/brochures' },
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
