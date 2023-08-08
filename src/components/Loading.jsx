import React from 'react';
import classes from './Loading.module.css';

export default function Loading() {
  return (
    <div className='my-auto flex flex-col items-center'>
      <div className={classes["lds-dual-ring"]}></div>
      <p className='text-white text-xl'>Carregando...</p>
    </div>
  )
}