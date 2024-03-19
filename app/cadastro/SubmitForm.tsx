"use client";

import { FormEvent } from 'react';

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

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20"> 
        <div className="flex flex-col">
          <label>Empresa<span className="text-red-500">*</span></label>
          <input type="text" name="empresa" required />
        </div>

        <div className="flex flex-col">
            <label>CNPJ da Empresa<span className="text-red-500">*</span></label>
            <input type="text" name="CNPJ" required />
        </div>

        <div className="flex flex-col">
          <label>Descrição da Vaga<span className="text-red-500">*</span></label>
          <input type="text" name="descricao" required />
        </div>

        <div className="flex flex-col">
          <label>Cidade<span className="text-red-500">*</span></label>
          <input type="text" name="cidade" required />
        </div>

        <div className="flex flex-col">
            <label>Estado<span className="text-red-500">*</span></label>
            <input type="text" name="estado" required />
        </div>

        <div className="flex flex-col">
            <label>Modalidade do Estágio<span className="text-red-500">*</span></label>
            <select name="Modalidade" required>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Híbrido">Híbrido</option>
            </select>
        </div>

        <div className="flex flex-col">
            <label>Carga Horária<span className="text-red-500">*</span></label>
            <input type="text" name="CargaHoraria" required />
        </div>

        <div className="flex flex-col">
            <label>Remuneração<span className="text-red-500">*</span></label>
            <input type="text" name="Remuneracao" required />
        </div>

        <div className="flex flex-col">
            <label>Benefícios<span className="text-red-500">*</span></label>
            <input type="text" name="Beneficios" required />
        </div>

        <div className="flex flex-col">
            <label>Responsabilidades<span className="text-red-500">*</span></label>
            <textarea name="Responsabilidades" required></textarea>
        </div>

        <div className="flex flex-col">
            <label>Responsável pelo Estágio<span className="text-red-500">*</span></label>
            <input type="text" name="ResponsavelEstagio" required />
        </div>

        <div className="flex flex-col">
            <label>Email do responsável<span className="text-red-500">*</span></label>
            <input type="email" name="EmailResponsavel" required />
        </div>

        <div className="flex flex-col">
            <label>Como se candidatar?<span className="text-red-500">*</span></label>
            <input type="text" name="ComoCandidatar" required />
        </div>

        <div className="flex h-10 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
            <button type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
  );  
}
