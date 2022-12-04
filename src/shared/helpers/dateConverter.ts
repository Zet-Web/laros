export const convertStrDate = (s: string): Date => {
  let [d, m, y] = s.split(/\D/)
  return new Date(Number(y), Number(m) - 1, Number(d))
}
