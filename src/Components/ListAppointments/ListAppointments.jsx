import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllAppointments } from '../../functions/api';
import styles from './ListAppointments.module.css';

export const ListAppointments = () => {
  const [tableData, setTableData] = useState([]);
  const monthNames = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  useEffect(() => {
    async function getData() {
      const data = await getAllAppointments();
      setTableData(data);
      return data;
    }

    getData();
  }, []);

  return (
    <div className={`row`}>
      {tableData.map((data, index) => {
        const date = new Date(data.dataHoraAgendamento);

        return (
          <div className='col-12 col-md-6 col-lg-3' key={index}>
            <div className={`card ${styles.cardAppointment}`}>
              <div>
                <span className={styles.month}>
                  {monthNames[date.getMonth()]}
                </span>
                <Link
                  className={styles.deleteButton}
                  to={`/consulta/${data.dentista.matricula}/${data.dataHoraAgendamento}`}
                >
                  🗑
                </Link>
                <span className={styles.day}>{date.getDay()}</span>
              </div>
              <div className={styles.nomeHolder}>
                <p className={styles.nomePaciente}>
                  <span className={styles.whoIs}>paciente</span>
                  {data.paciente.nome} {data.paciente.sobrenome}
                </p>
                <span className={styles.verticalLine} />
                <p className={styles.nomeDentista}>
                  <span className={styles.whoIs}>dentista</span>
                  {data.dentista.nome} {data.dentista.sobrenome}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
