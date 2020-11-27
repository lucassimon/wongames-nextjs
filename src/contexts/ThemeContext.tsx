/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

const defaultMode = 'dark'

export interface ThemeContext {
  mode: string
  changeTheme(event: React.ChangeEvent<HTMLSelectElement>): void
}

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext(
  {
    mode: defaultMode,
    changeTheme: (event: React.ChangeEvent<HTMLSelectElement>) =>
      console.log(event)
  }
)

export const useTheme = () => React.useContext(ManageThemeContext)
