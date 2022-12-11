import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ScheduleFormModal } from '../ScheduleForm/modal/ScheduleFormModal';
import styles from './DetailCard.module.css';
import { api } from '../../services/api';
import { Loading } from '../Loading/Loading';

export function DetailCard() {
  const { idDentist } = useParams();

  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);

  //Nesse useEffect, você vai fazer um fetch na api passando o
  //id do dentista que está vindo do react-router e carregar os dados em algum estado
  useEffect(() => {
    getDentistDetails();
  }, []);

  async function getDentistDetails() {
    const response = await api.get(`/dentista?matricula=${idDentist}`);

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
      <h1>Detalhes sobre o Dentista {dentist.nome} </h1>
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
              <li className='list-group-item'>Nome: {dentist.nome}</li>
              <li className='list-group-item'>
                Sobrenome: {dentist.sobrenome}
              </li>
              <li className='list-group-item'>
                Usuário: {dentist.usuario.username}
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
