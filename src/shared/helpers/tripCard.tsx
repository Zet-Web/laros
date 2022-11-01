export const generateTagText: (str: string) => string = str => {
  const arr = /(?=[A-Z])/g[Symbol.split](str)
  return arr.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(' ')
}
