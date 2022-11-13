import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortPropertyEnum } from './types'

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  duration: 0,
  subRegion: 0,

  sort: {
    name: 'A-Z',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setSortDuration(state, action) {
      state.durationId = action.payload
    },
    setSubRegion(state, action) {
      state.subRegionId = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage)
        state.categoryId = Number(action.payload.categoryId)
        state.durationId = Number(action.payload.durationId)
        state.sort = action.payload.sort
      } else {
        state.currentPage = 1
        state.categoryId = 0
        state.durationId = 0
        state.sort = {
          name: 'A-Z',
          sortProperty: SortPropertyEnum.RATING_DESC,
        }
      }
    },
  },
})

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
  setSortDuration,
  setSubRegion,
} = filterSlice.actions

export default filterSlice.reducer
