import { dynamic } from 'next/dynamic';
import { expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import SubmitForm from '@/app/cadastro/SubmitForm'

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
  render(<SubmitForm />);
  [ 'Empresa', 'CNPJ da Empresa', 'Descrição da Vaga', 'Cidade',
    'Estado', 'Modalidade do Estágio', 'Carga Horária', 'Remuneração',
    'Benefícios', 'Responsabilidades', 'Responsável pelo Estágio',
    'Email do Responsável', 'Como se Candidatar?'
  ].map((label) => (
    expect(screen.getByLabelText(label)).toBeDefined()
  ))
})
