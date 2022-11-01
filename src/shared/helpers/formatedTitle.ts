export const formattedTitle = (title: string) => {
  return title.toLowerCase().replace(/[\(\)\s]/g, '')
}
