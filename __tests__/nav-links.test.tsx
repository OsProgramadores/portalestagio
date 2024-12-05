import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import NavLinks from '@/app/ui/cadastro/nav-links'

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

test('Barra de Links lateral', async () => {
  render(<NavLinks />);
  const home = screen.getByRole('link', { name: 'Home', exact: true })
  const cadastro = screen.getByRole('link', { name: 'Cadastro', exact: true })
  const busca = screen.getByRole('link', { name: 'Busca', exact: true })
  const sobre = screen.getByRole('link', { name: 'Sobre', exact: true })

  expect(home).toHaveAttribute('href', '/')
  expect(cadastro).toHaveAttribute('href', '/cadastro')
  expect(busca).toHaveAttribute('href', '/busca')
  expect(sobre).toHaveAttribute('href', '/sobre')

  expect(home).toHaveAccessibleDescription()
  expect(cadastro).toHaveAccessibleDescription()
  expect(busca).toHaveAccessibleDescription()
  expect(sobre).toHaveAccessibleDescription()
})
