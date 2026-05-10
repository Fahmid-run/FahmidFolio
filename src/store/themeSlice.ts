import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ThemeState, ThemeMode, ThemeAccent } from '@/types'

const initialState: ThemeState = {
  mode: 'dark',
  accent: 'violet',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload
    },
    setAccent(state, action: PayloadAction<ThemeAccent>) {
      state.accent = action.payload
    },
    toggleMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { setMode, setAccent, toggleMode } = themeSlice.actions
export default themeSlice.reducer
