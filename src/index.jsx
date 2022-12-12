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
import './index.css';
import { DetailCard } from './Components/DetailCard/DetailCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='home' element={<Home />} />
            <Route path='detail/:idDentist' element={<DetailCard />} />
            <Route path='logout' element={<Logout />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
