import Axios from 'axios'

export * from './endpoints'

export const api = Axios.create({
  baseURL: `http://165.227.155.246/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
