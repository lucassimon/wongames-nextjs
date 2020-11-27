import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global.styles'
import lightTheme from 'styles/lightTheme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
