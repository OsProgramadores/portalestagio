import { assert, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cadastro from '@/app/cadastro/page'
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

test('Componentes da página de cadastro', async () => {
  render(<Cadastro />);
  const main = within(document.querySelector('#cadastro'));
  expect(
      main.getByRole('heading', { level: 2, name: 'Cadastro de vagas', exact: true })
  ).toBeDefined();
})

test('Formulário de cadastro de estágios', async () => {
  render(<SubmitForm />);
  [ 'Empresa', 'CNPJ da Empresa', 'Descrição da Vaga', 'Cidade',
    'Estado', 'Modalidade do Estágio', 'Carga Horária', 'Remuneração',
    'Benefícios', 'Responsabilidades', 'Responsável pelo Estágio',
    'Email do Responsável', 'Como se Candidatar?'
  ].map((label) => (
    expect(screen.getByLabelText(label)).toBeRequired()
  ))

  expect(screen.getByRole('button', { name: 'Cadastrar' })).toBeDefined()
})
