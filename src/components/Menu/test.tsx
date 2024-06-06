import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Menu from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the heading', async () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render the open/close menu', async () => {
    renderWithTheme(<Menu />)

    // selecionar o menuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // Clicar no botão de abrir o menu e verificar se ele abriu
    const openMenuButton = screen.getByLabelText(/open menu/i)
    await userEvent.click(openMenuButton)

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Clicar no botão de fechar o menu e verificar se ele fechou
    const closeMenuButton = screen.getByLabelText(/close menu/i)
    await userEvent.click(closeMenuButton)

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu username="robson" />)

    expect(screen.queryByText(/my account/i)).toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
