import { configureStore } from '@reduxjs/toolkit'
import { loginModalSlice } from "./home.slice";

export const rootReducer = {
  loginModalSlice: loginModalSlice.reducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

