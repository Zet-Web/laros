import { DATE_REG_EXP } from 'shared/constants/regExp'

export const validateStrDate = (date: string) => {
  const regex: RegExp = DATE_REG_EXP
  return regex.test(date)
}
