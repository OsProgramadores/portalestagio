import React from 'react';

interface Vaga {
  id: number;
  nome: string;
  modalidade: string;
  empresa: string;
  localizacao: string;
  valorBolsa: string;
}

interface ListaVagasProps {
  vagas: Vaga[];
}

const ListaVagas: React.FC<ListaVagasProps> = ({ vagas }) => {
  return (
    <div>
      <h3>Últimas vagas</h3>
      <p>Vagas de estágio postadas recentemente:</p>
      {vagas.map((vaga) => (
        <div key={vaga.id}>
          <p>
            <a href={`/detalhes-vaga${vaga.id}`}>{vaga.nome} - {vaga.modalidade}</a>
          </p>
          <p>{vaga.empresa} - {vaga.localizacao}</p>
          <p>Valor da Bolsa: {vaga.valorBolsa}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaVagas;
