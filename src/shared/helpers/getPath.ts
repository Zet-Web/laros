const getPath = (path: string): string => {
  return path.split('/').slice(0, -1).join('/') == ''
    ? '/destinations/areas'
    : path.split('/').slice(0, -1).join('/')
}

export default getPath
