"use client";

import { FormEvent, useId } from 'react';

export default function SubmitForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  function Required_input({inputLabel, inputName}) {
        const inputId = useId();
        return <div className="flex flex-col">
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="{inputId}">
            {inputLabel}</label>
          <input id="{inputId}" type="text" name="{inputName}" required />
        </div>;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20"> 
        {[
            ['Empresa', 'empresa'],
            ['CNPJ da Empresa', 'CNPJ'],
            ['Descrição da Vaga', 'descricao'],
            ['Cidade', 'cidade'],
            ['Estado', 'estado']
        ].map(([label, name]) => (
            <Required_input inputLabel={label} inputName={name} />
        ))}

        <div className="flex flex-col">
            <label htmlFor="modalidade-select" className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Modalidade do Estágio</label>
            <select id="modalidade-select" name="Modalidade" required>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Híbrido">Híbrido</option>
            </select>
        </div>

        {[
            ['Carga Horária', 'CargaHoraria'],
            ['Remuneração', 'Remuneracao'],
            ['Benefícios', 'Beneficios'],
            ['Responsabilidades', 'Responsabilidades'],
            ['Responsável pelo Estágio', 'ResponsavelEstagio'],
            ['Email do Responsável', 'EmailResponsavel'],
            ['Como se Candidatar?', 'ComoCandidatar'],
        ].map(([label, name]) => (
            <Required_input inputLabel={label} inputName={name} />
        ))}

        <div className="flex h-10 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
            <button type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
  );  
}
