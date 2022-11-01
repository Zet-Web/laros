import { uniq } from 'lodash'
import { Car } from 'shared/types/car'

export const getCarGroups = (cars: Car[]): string[] => {
  return uniq(cars.map(car => car.group))
}
export const getCarsByGroup = (cars: Car[], group: string): Car[] => {
  return cars.filter(car => car.group === group)
}
