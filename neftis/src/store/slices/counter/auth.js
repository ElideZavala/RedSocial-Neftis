import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    counter: 10
  },
  reducers: {
    login: (data) => async (dispatch ) => {
      try {
			
		} catch (error) {
			
		}
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;