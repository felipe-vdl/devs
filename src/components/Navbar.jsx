import React from 'react'
import logo from "../imgs/logo.png";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='min-w-full text-yellow-200 bg-dourado-500 py-2 drop-shadow-md flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-4'>
      <div className='w-full md:w-1/3'>
        <NavLink to={'/'}>
          <img src={logo} alt="Logo Mesquita" className='drop-shadow-md w-1/2 mx-auto' />
        </NavLink>
      </div>
      <div className='w-1/3 text-center'>
        <NavLink to={'/'} end className={({ isActive }) => isActive ? 'text-zinc-50' : undefined} >
          <h1 className='NavLinkShadow text-2xl font-bold tracking-wider hover:text-zinc-50'>TECNOLOGIA</h1>
        </NavLink>
      </div>
      <div className='w-1/3 flex justify-center gap-12'>
        <NavLink to={'/projetos'} className={({ isActive }) => isActive ? 'text-zinc-50' : undefined} >
          <h1 className='NavLinkShadow text-2xl font-bold tracking-wider hover:text-zinc-50'>PROJETOS</h1>
        </NavLink>
        <NavLink to={'/membros'} className={({ isActive }) => isActive ? 'text-zinc-50' : undefined} >
          <h1 className='NavLinkShadow text-2xl font-bold tracking-wider hover:text-zinc-50'>TIME</h1>
        </NavLink>
      </div>
    </div>
  )
}