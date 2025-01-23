import { screen } from '@testing-library/react'

import Auth from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Auth />', () => {
  it('should render logos, title, children', () => {
    renderWithTheme(<Auth title="Auth title">Children</Auth>)

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
