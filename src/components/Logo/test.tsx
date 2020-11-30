import { screen } from '@testing-library/react'
import 'jest-styled-components'
import Logo from '.'

import { renderWithLightTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  describe('LigthTheme', () => {
    it('should render white label by default', () => {
      const { container } = renderWithLightTheme(<Logo />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        color: '#030517'
      })
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should render black label when color is passed', () => {
      const { container } = renderWithLightTheme(<Logo color="white" />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        color: '#FAFAFA'
      })
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should render a normal logo by default', () => {
      const { container } = renderWithLightTheme(<Logo />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        width: '11rem'
      })
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should render a bigger logo', () => {
      const { container } = renderWithLightTheme(<Logo size="large" />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        width: '20rem'
      })
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should render a bigger logo whithout text if hideOnMobile', () => {
      const { container } = renderWithLightTheme(<Logo hideOnMobile />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
        'width',
        '5.8rem',
        {
          media: '(max-width: 768px)'
        }
      )
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
