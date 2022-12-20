import { useRouter } from 'next/router'
import get from 'lodash/get'
// @ts-ignore //TODO
import de from '/public/locales/de.json'
// @ts-ignore //TODO
import en from '/public/locales/en.json'

import { DEFAULT_LANG } from 'shared/constants'

const TRANSLATIONS: Record<string, any> = { en, de }

export const useTranslate = () => {
  const { locale } = useRouter()
  const localisation = TRANSLATIONS[locale ?? DEFAULT_LANG]

  return (key: string) => get(localisation, key)
}
