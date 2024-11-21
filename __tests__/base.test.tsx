import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
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

test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Portal de Estágios' })).toBeDefined()
})
