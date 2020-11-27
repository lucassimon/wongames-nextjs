import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import lightTheme from 'styles/lightTheme'
import darkTheme from 'styles/darkTheme'
import accessibilityTheme from 'styles/accessibilityTheme'

export const renderWithLightTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>)

export const renderWithDarkTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>)

export const renderWithAccessibilityTheme = (
  children: React.ReactNode
): RenderResult =>
  render(<ThemeProvider theme={accessibilityTheme}>{children}</ThemeProvider>)
