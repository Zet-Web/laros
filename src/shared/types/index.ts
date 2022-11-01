export interface Meta {
  readonly id: number
  name: string
}
export enum Title {
  'Mr' = 'Mr',
  'Mrs' = 'Mrs',
  'Ms' = 'Ms',
}

export enum Currency {
  CHF = 'CHF',
}

export interface Option {
  label: string
  value: string
  icon?: string
}

export type ServerDate = `${number}-${number}-${number}`
