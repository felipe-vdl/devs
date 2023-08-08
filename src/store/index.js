import { configureStore } from '@reduxjs/toolkit';

import projetosReducer from './projetos';
import equipesReducer from './equipes';

const store = configureStore({ reducer: {
    projetos: projetosReducer,
    equipes: equipesReducer
}});

export default store;