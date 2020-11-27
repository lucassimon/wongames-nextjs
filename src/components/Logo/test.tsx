import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Logo from '.'
import lightTheme from 'styles/lightTheme'

describe('<Logo />', () => {
  it('should render the logo with black', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Logo color="black" />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo with white', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Logo color="white" />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo without color prop', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Logo />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
