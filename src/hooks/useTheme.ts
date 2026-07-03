import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store/store'
import {  setAccent } from '@/store/themeSlice'
import type {  ThemeAccent } from '@/types'

export function useTheme() {
  const dispatch = useDispatch()
  const {  accent } = useSelector((state: RootState) => state.theme)

  return {
    accent,
    setAccent: (a: ThemeAccent) => dispatch(setAccent(a)),
    accentColor: accent === 'violet' ? '#7c3aed' : accent === 'yellow' ? '#ca8a04' : '#ea580c',
    accentLight: accent === 'violet' ? '#a78bfa' : accent === 'yellow' ? '#fbbf24' : '#fb923c',
  }
}
