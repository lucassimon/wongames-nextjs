import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLightTheme } from 'utils/tests/helpers'
import theme from 'styles/lightTheme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = renderWithLightTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with label (black)', () => {
    renderWithLightTheme(<Radio label="Radio" labelColor="black" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render without label', () => {
    renderWithLightTheme(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithLightTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('Should be accessible with tab', () => {
    renderWithLightTheme(<Radio label="Radio" labelFor="Radio" />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})