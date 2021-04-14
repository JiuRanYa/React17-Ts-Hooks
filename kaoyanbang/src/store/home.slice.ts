import { createSlice } from '@reduxjs/toolkit'

interface State {
  isLoginModalOpen: boolean
}

const initialState: State = {
  isLoginModalOpen: false
}

export const loginModalSlice = createSlice({
  name: "loginModalSlice",
  initialState,
  reducers: {
    openLoginModal (state) {
      state.isLoginModalOpen = true
    },
    closeLoginModal (state) {
      state.isLoginModalOpen = false
    }
  }
})

export const loginModalSliceActions = loginModalSlice.actions;
