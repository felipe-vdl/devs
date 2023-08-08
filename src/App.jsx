import React, { Suspense } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import TecnologiaLayout from './components/TecnologiaLayout';
import Loading from './components/Loading';
const HomePage = React.lazy(() => import('./pages/Home'));
const ProjetosLayout = React.lazy(() => import('./components/ProjetosLayout'));
const Projetos = React.lazy(() => import('./pages/Projetos'));
const ProjetoProfile = React.lazy(() => import('./pages/ProjetoProfile'));
const MembrosLayout = React.lazy(() => import('./components/MembrosLayout'));
const Membros = React.lazy(() => import('./pages/Membros'));
const MembroProfile = React.lazy(() => import('./pages/MembroProfile'));

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={
      <Suspense fallback={<Loading />}>
        <TecnologiaLayout />
      </Suspense>
    }
  >
    <Route index element={
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    } />
    <Route path="/projetos" element={
      <Suspense fallback={<Loading />}>
        <ProjetosLayout />
      </Suspense>
    } >
      <Route index element={
        <Suspense fallback={<Loading />}>
          <Projetos />
        </Suspense>
      } />
      <Route path=":id" element={
        <Suspense fallback={<Loading />}>
          <ProjetoProfile />
        </Suspense>
      } />
    </Route>
    <Route path="/membros" element={
      <Suspense fallback={<Loading />}>
        <MembrosLayout />
      </Suspense>
    } >
      <Route index element={
        <Suspense fallback={<Loading />}>
          <Membros />
        </Suspense>
      } />
      <Route path=":id" element={
        <Suspense fallback={<Loading />}>
          <MembroProfile />
        </Suspense>
      } />
    </Route>
  </Route>
));

export default function App() {
  return <RouterProvider router={router} />
}