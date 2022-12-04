import Axios from 'axios'

export * from './endpoints'

export const api = Axios.create({
  baseURL: `https://developer.laros.ch/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
