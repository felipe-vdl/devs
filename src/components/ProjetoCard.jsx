import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function ProjetoCard(props) {
  const navigate = useNavigate();

  const handleClick = evt => {
    navigate(`/projetos/${props.projeto.id}`);
  }

  return (
    <div onClick={handleClick} className={`group cursor-pointer hover:text-yellow-800 transition hover:scale-105 hover:translate-y-[-0.25rem] hover:shadow-lg hover:shadow-yellow-800 hover:bg-yellow-100 bg-slate-600 text-zinc-50 w-[85%] sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/6 p-4 px-4 rounded-lg flex flex-col items-center gap-4 shadow-md ${props.theme.shadowColor} border ${props.theme.borderColor} hover:border-yellow-500`}>
      <img width={'1440px'} height={'900px'} className={`shadow-md ${props.theme.shadowColor} group-hover:shadow-yellow-800 transition rounded-lg object-contain border ${props.theme.borderColor} group-hover:border-yellow-600`} src={props.projeto.img} alt={props.projeto.nome} />
      <span className='font-medium text-lg sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] text-center'>{props.projeto.nome}</span>
    </div>
  )
}