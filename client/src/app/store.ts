
import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import loginFormDisplayReducer from '../features/loginFormDisplaySlice'
import themeReducer from '../features/themeSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    loginFormDisplay: loginFormDisplayReducer,
    theme: themeReducer,
    user: userReducer
  }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>