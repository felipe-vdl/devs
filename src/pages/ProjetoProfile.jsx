import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ProjetoProfile(props) {
  let { id } = useParams();
  const projetos = useSelector(state => state.projetos.lista);
  const projeto = projetos.find(projeto => projeto.id === id);

  return (
    <div className='Profile mx-12 flex flex-col md:flex-row gap-6 p-4 rounded bg-slate-800 border border-indigo-500 shadow-md shadow-indigo-900 text-zinc-50'>
      <div className='imgContainer sm:w-full md:w-1/2 lg:w-1/3 flex flex-col items-center gap-4'>
        {/* <h2 className='TituloProjeto font-medium text-xl'>{projeto.nome}</h2> */}
        <img width={'1440px'} height={'900px'} className='p-1 border border-indigo-500 shadow-md shadow-indigo-900 object-contain rounded-lg' src={projeto.img} alt={projeto.nome} />
      </div>
      <div className='Bio flex flex-col gap-4 sm:w-full md:w-1/2 lg:w-2/3'>
        <h2 className='text-zinc-50 font-bold text-xl text-center tracking-wide'>Sobre o {projeto.nome}:</h2>
        <div className={`TextBox p-4 bg-slate-700 h-full rounded ${projeto.sobre ? 'text-zinc-50': 'text-slate-500'}`}>
          {projeto.sobre ? projeto.sobre : 'Nada informado'}
        </div>
      </div>
    </div>
  )
}