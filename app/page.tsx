"use client";
import React, { useState, useEffect } from 'react';
import PortalEstagioLogo from './components/PortalEstagioLogo';
import SearchBox from './components/SearchBox';
import Button from './components/Button';
import ListaVagas from './components/ListaVagas'; // Importe o novo componente
import Menu from './components/Menu';

const Page = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    // Simula uma requisição a um servidor para buscar os dados do arquivo JSON
    fetch('/api/vagas.json')
      .then((response) => response.json())
      .then((data) => setVagas(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div className='bg-white flex flex-col h-screen'>
      <div className='=flex-none'> 
        <div className="flex space-x-4 mt-2 ml-2 mr-2">
          <div className='flex-none w-1/5'><PortalEstagioLogo /></div>
          <div className='grow w-3/5'><SearchBox /></div>
          <div className='flex-none w-1/5'><Button /></div>
        </div>
      </div>
      <div className='flex-grow bg-gray-300 mt-2 ml-2 mr-2 flex'>
        <div id="leftMenu" className="flex flex-row items-start justify-center w-1/5 bg-gray-200">
          <Menu side="left"/>
        </div>
        <div id="resultSearch" className="flex flex-col items-center justify-center w-3/5 bg-gray-300">
          {/* Use o componente ListaVagas aqui */}
          <ListaVagas vagas={vagas} />
        </div>
        <div id="rightMenu" className="flex flex-row items-start justify-center w-1/5 bg-gray-200">
          <Menu side="right"/>
        </div>
      </div>
      <div className='flex-none'>
        <div className='flex justify-center grow mt-2 ml-2 mr-2'>
          Portal Estágio - 2024
        </div>
      </div>
    </div>
  );
};

export default Page;