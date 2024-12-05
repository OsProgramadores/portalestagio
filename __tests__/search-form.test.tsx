import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import SearchForm from '@/app/busca/SearchForm'

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


test('Formulário de cadastro de estágios', async () => {
  render(<SearchForm />);
  [ 
      'Buscar por empresa', 'Buscar por regime'
  ].map((label) => (
    expect(screen.getByLabelText(label)).toBeDefined()
  ))
})
