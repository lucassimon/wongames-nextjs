import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global.styles'
import lightTheme from 'styles/lightTheme'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: lightTheme.colors.white
      },
      {
        name: 'won-dark',
        value: lightTheme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
