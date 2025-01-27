import { screen } from '@testing-library/react'

import Auth from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
