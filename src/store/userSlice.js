import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
  themeColorBlack: true,
}

const userSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.user
    },
    themeChange: (state) => {
      state.themeColorBlack = !state.themeColorBlack
    },
  },
})

export const { setUser, themeChange } = userSlice.actions
export default userSlice.reducer
