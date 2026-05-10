export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export type ThemeMode = 'light' | 'dark'
export type ThemeAccent = 'violet' | 'yellow' | 'orange'

export interface ThemeState {
  mode: ThemeMode
  accent: ThemeAccent
}
