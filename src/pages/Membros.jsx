import React from 'react'
import { useSelector } from 'react-redux'
import MembroCard from '../components/MembroCard'

export default function Membros(props) {
  const equipes = useSelector(state => state.equipes);

  return (
    <div className='Membros flex flex-col gap-4'>
      { equipes.map(equipe => (
        <div key={equipe.id} className='Setor'>
          {equipe.titulo && <h2 className={`TituloSetor tracking-wider shadow-md ${equipe.shadowColor} ${equipe.bgColor} text-xl p-4 text-center font-base ${equipe.textColor}`}>{equipe.titulo}</h2>}
          <div className='MembrosSetor px-12 flex items-start gap-6 flex-wrap justify-center'>
            {[...equipe.membros].sort(() => (Math.random() > .5) ? 1 : -1)
              .map((membro, i) => <MembroCard key={membro.id} shadowColor={equipe.shadowColor} borderColor={equipe.borderColor} id={membro.id} nome={membro.nome} img={membro.img} />)}
          </div>
        </div>
      )) }
    </div>
  )
}