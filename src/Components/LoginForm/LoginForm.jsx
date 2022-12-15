import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authUser, isUserLoggedIn } from '../../functions/authUser';
import { ThemeContext } from '../../Providers/ThemeProvider';

import styles from './LoginForm.module.css';

export function LoginForm() {
  const { color } = useContext(ThemeContext);

  const [formData, setFormData] = useState({ username: '', password: '' });
  const isUserLogged = isUserLoggedIn();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAuthorized = await authUser(formData);
    if (isAuthorized.logged) {
      const loginData = JSON.stringify({
        token: isAuthorized.token,
        tipo: isAuthorized.tipo,
      });

      localStorage.setItem('loginData', loginData);

      toast.success('Login efetuado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } else {
      toast.error('Usuário ou senha inválidos.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  useEffect(() => {
    if (isUserLogged) {
      navigate('/home');
    }
  }, [isUserLogged, navigate]);

  return (
    <>
      <ToastContainer />
      <div
        className={
          color === 'dark'
            ? `text-center card container ${styles.cardDark}`
            : `text-center card container ${styles.card}`
        }
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder='Login'
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
              name='login'
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              type='password'
              required
            />
            <button className='btn btn-primary' type='submit'>
              Entrar no Sistema
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
