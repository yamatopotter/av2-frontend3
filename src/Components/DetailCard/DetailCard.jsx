import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { getDentistData } from '../../functions/api';
import { Loading } from '../Loading/Loading';
import { ThemeContext } from '../../Providers/ThemeProvider';
import { ScheduleFormModal } from '../ScheduleForm/modal/ScheduleFormModal';

import styles from './DetailCard.module.css';

export function DetailCard() {
  const { color } = useContext(ThemeContext);

  const { idDentist } = useParams();

  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getDentistData(idDentist);

      setDentist(data);
      setLoading(false);
    }
    getData();
  }, [idDentist]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer />
      <h1>Detalhes sobre o Dentista {dentist.nome} </h1>
      <section className='card col-sm-12 col-lg-6 container'>
        <div
          className={
            color === 'dark'
              ? `card-body row ${styles.cardDark}`
              : `card-body row`
          }
        >
          <div className='col-sm-12 col-lg-6'>
            <img
              className='card-img-top'
              src='/images/doctor.jpg'
              alt='doctor placeholder'
            />
          </div>
          <div className='col-sm-12 col-lg-6'>
            <ul className='list-group'>
              <li className='list-group-item'>Nome: {dentist.nome}</li>
              <li className='list-group-item'>
                Sobrenome: {dentist.sobrenome}
              </li>
              <li className='list-group-item'>
                Usuário: {dentist.usuario.username}
              </li>
            </ul>

            <div className='text-center'>
              <button
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                className={
                  color === 'dark'
                    ? `btn btn-dark ${styles.button}`
                    : `btn btn-light ${styles.button}`
                }
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
}
