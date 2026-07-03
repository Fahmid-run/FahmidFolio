import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ThemeState, ThemeAccent } from '@/types'

const initialState: ThemeState = {
  accent: 'violet',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    
    setAccent(state, action: PayloadAction<ThemeAccent>) {
      state.accent = action.payload
    },
    
  },
})

export const { setAccent } = themeSlice.actions
export default themeSlice.reducer
