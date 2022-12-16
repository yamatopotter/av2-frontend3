import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './Routes/ProtectedRoutes';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { App } from './App';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Logout } from './Routes/Logout';
import { NotFound } from './Components/Error404/NotFound';
import { Pacientes } from './Routes/Pacientes';
import { Dentistas } from './Routes/Dentistas';
import { Consultas } from './Routes/Consultas';
import './index.css';
import { DetailCard } from './Components/DetailCard/DetailCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='home' element={<Home />} />
            <Route path='dentistas' element={<Dentistas />} />
            <Route path='detail/:idDentist' element={<DetailCard />} />
            <Route path='pacientes' element={<Pacientes />} />
            <Route path='paciente/editar/:matricula' element={<Pacientes />} />
            <Route path='consultas' element={<Consultas />} />
            <Route path='logout' element={<Logout />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
