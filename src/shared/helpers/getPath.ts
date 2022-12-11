export const getPath = (path: string): 'areas' | 'hotels' | '' => {
  switch (path.split('/').find(p => p === 'areas' || p === 'hotels')) {
    case 'areas':
      return 'areas'
    case 'hotels':
      return 'hotels'
    default:
      return ''
  }
}
