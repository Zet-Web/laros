import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Hotel, SearchHotelParams } from './types'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotelsStatus',
  async params => {
    const { sortBy, order, category, search, currentPage, duration } = params
    console.log(params, 212)
    const { data } = await axios.get(
      `https://6315945933e540a6d37f6487.mockapi.io/hotels`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 7,
            category,
            sortBy,
            order,
            search,
            duration,
          },
          identity
        ),
      }
    )

    return data
  }
)

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Hotel, SearchHotelParams } from './types';
// import pickBy from 'lodash/pickBy';
// import identity from 'lodash/identity';

// export const fetchHotels = createAsyncThunk<Hotel[], SearchHotelParams>(
//   'hotels/fetchHotelsStatus',
//   async (params) => {
//     const { sortBy, order, category, search, currentPage } = params;
//     console.log(params, 4444);
//     const { data } = await axios.get<Hotel[]>(`https://6315945933e540a6d37f6487.mockapi.io/hotels`, {
//       params: pickBy(
//         {
//           page: currentPage,
//           limit: 3,
//           category,
//           sortBy,
//           order,
//           search,
//         },
//         identity,
//       ),
//     });

//     return data;
//   },
// );
