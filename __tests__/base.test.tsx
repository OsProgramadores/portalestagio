import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import HomePage from '@/app/page'
import Cadastro from '@/app/cadastro/page'

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
  render(<HomePage />)
  const h1 = screen.getByRole('heading', { level: 1, name: 'Portal Estágio', exact: true })
  const h2 = screen.getByRole('heading', { level: 2, name: 'Quer estagiar ou tem um estágio para oferecer?', exact: true })
  const home = screen.getByRole('link', { name: 'Portal Estágio', exact: true })
  const cadastro = screen.getByRole('link', { name: 'Cadastrar Estágio', exact: true })
  const busca = screen.getByRole('link', { name: 'Procurar Estágio', exact: true })

  expect(h1).toBeInTheDocument()
  expect(h2).toBeInTheDocument()
  expect(home).toBeInTheDocument()
  expect(cadastro).toBeInTheDocument()
  expect(busca).toBeInTheDocument()

  expect(home).toHaveAttribute('href', '/')
  expect(cadastro).toHaveAttribute('href', '/cadastro')
  expect(busca).toHaveAttribute('href', '/busca')

  expect(home).toHaveAccessibleDescription()
  expect(cadastro).toHaveAccessibleDescription()
  expect(busca).toHaveAccessibleDescription()
})

test('Componentes da página de cadastro', () => {
  render(<Cadastro />)
  const h2 = screen.getByRole('heading', { level: 2, name: 'Cadastro de vagas', exact: true })
  expect(h2).toBeInTheDocument()
})

test('Formulário de cadastro de vagas', () => {
  render(<Cadastro />)
  empresa = screen.getByLabelText('Empresa')
  expect(Empresa).toBeInTheDocument()
})
