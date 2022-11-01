export interface DefaultPaginationParams {
  limit?: number
  offset?: number
}

export interface AxiosPaginatedResponse<T = any> {
  count: number
  next: T | null
  previous: T | null
  data: T[]
}
