import { useEffect, useState } from 'react';

import styles from './DetailCard.module.css';
import ScheduleFormModal from '../ScheduleForm/modal/ScheduleFormModal';

import { api } from '../../services/api';
import { Loading } from '../Loading/Loading';

export function DetailCard() {
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);

  //Nesse useEffect, você vai fazer um fetch na api passando o
  //id do dentista que está vindo do react-router e carregar os dados em algum estado
  useEffect(() => {
    getDentistDetails();
  }, []);

  async function getDentistDetails() {
    const response = await api.get(`/dentista?matricula=${dentist.matricula}`);

    setDentist(response.data);
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    //As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist {'Nome do Dentista'} </h1>
      <section className='card col-sm-12 col-lg-6 container'>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row`}>
          <div className='col-sm-12 col-lg-6'>
            <img
              className='card-img-top'
              src='/images/doctor.jpg'
              alt='doctor placeholder'
            />
          </div>
          <div className='col-sm-12 col-lg-6'>
            <ul className='list-group'>
              <li className='list-group-item'>Nome: {'Nome do Dentista'}</li>
              <li className='list-group-item'>
                Sobrenome: {'Sobrenome do Dentista'}
              </li>
              <li className='list-group-item'>
                Usuário: {'Nome de usuário do Dentista'}
              </li>
            </ul>
            <div className='text-center'>
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                className={`btn btn-light ${styles.button}`}
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
