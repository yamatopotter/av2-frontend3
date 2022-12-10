import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';
import NotFound from './Components/Error404/NotFound';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
