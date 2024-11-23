import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Page from '../app/page'

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Lusitana: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}))

test('Componentes da página inicial', () => {
  render(<Page />)
  const h1 = screen.getByRole('heading', { level: 1, name: 'Portal Estágio', exact: true })
  const h2 = screen.getByRole('heading', { level: 2, name: 'Quer estagiar ou tem um estágio para oferecer?', exact: true })
  const home = screen.getByRole('link', { name: 'Portal Estágio', exact: true })
  const cadastro = screen.getByRole('link', { name: 'Cadastrar Estágio', exact: true })
  const busca = screen.getByRole('link', { name: 'Procurar Estágio', exact: true })

  expect(h1).toBeInTheDocument()
  expect(h2).toBeInTheDocument()
  expect(home).toBeInTheDocument()
  expect(home).toHaveAttribute('href', '/')
  expect(home).toHaveAccessibleDescription()
  expect(cadastro).toBeInTheDocument()
  expect(cadastro).toHaveAttribute('href', '/cadastro')
  expect(cadastro).toHaveAccessibleDescription()
  expect(busca).toBeInTheDocument()
  expect(busca).toHaveAttribute('href', '/busca')
  expect(busca).toHaveAccessibleDescription()
})
