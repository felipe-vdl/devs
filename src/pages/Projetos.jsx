import React from 'react';
import { useSelector } from 'react-redux';
import ProjetoCard from "../components/ProjetoCard";

export default function Projetos(props) {
  const projetos = useSelector(state => state.projetos);

  return (
    <div className='Projetos px-12'>
      <div className='ProjetosList flex gap-8 sm:gap-6 flex-wrap justify-center'>
        {[...projetos.lista].sort(() => (Math.random() > .5) ? 1 : -1)
          .map(projeto => <ProjetoCard key={projeto.id} projeto={projeto} theme={projetos.theme} />)
        }
      </div>
    </div>
  )
}