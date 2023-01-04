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
  { name: 'terms.travelDescription', to: '/terms/0' },
  { name: 'terms.rentalDescription', to: '/terms/1' },
  { name: 'terms.cookiesDescription', to: '/terms/2' },
  { name: 'terms.termsOfUseDescription', to: '/terms/3' },
  { name: 'terms.privacy', to: '/terms/4' },
]

export const mainNavItems = [
  { name: 'navigation.navigate.home', to: '/' },
  { name: 'navigation.navigate.about', to: '/about' },
  { name: 'navigation.navigate.brochure', to: '/brochures' },
]
