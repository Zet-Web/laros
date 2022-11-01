export const getAboutTabIndex = (path: string): number => {
  const tab = path.replace('about/', '')
  switch (tab) {
    case '/':
      return 0
    case '/team':
      return 1
    case '/testimonials':
      return 2
    case '/faq':
      return 3
    case '/careers':
      return 4
    default:
      return 0
  }
}
