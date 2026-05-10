import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store/store'
import { setMode, setAccent, toggleMode } from '@/store/themeSlice'
import type { ThemeMode, ThemeAccent } from '@/types'

export function useTheme() {
  const dispatch = useDispatch()
  const { mode, accent } = useSelector((state: RootState) => state.theme)

  return {
    mode,
    accent,
    isDark: mode === 'dark',
    setMode: (m: ThemeMode) => dispatch(setMode(m)),
    setAccent: (a: ThemeAccent) => dispatch(setAccent(a)),
    toggleMode: () => dispatch(toggleMode()),
    accentColor: accent === 'violet' ? '#7c3aed' : accent === 'yellow' ? '#ca8a04' : '#ea580c',
    accentLight: accent === 'violet' ? '#a78bfa' : accent === 'yellow' ? '#fbbf24' : '#fb923c',
  }
}
