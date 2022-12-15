import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  getAllDentists,
  getAllPatients,
  addAppointment,
} from '../../functions/api';

import styles from './ScheduleForm.module.css';

export function ScheduleForm() {
  const [dentists, setDentists] = useState([]);
  const [patients, setPatients] = useState([]);

  const [input, setInput] = useState({
    patient: {},
    dentist: {},
    appointmentData: '',
  });

  // const [appointmentData, setAppointmentData] = useState('');

  useEffect(() => {
    async function getData() {
      const dataDentists = await getAllDentists();
      const dataPatients = await getAllPatients();

      setDentists(dataDentists);
      setPatients(dataPatients);
    }

    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    scheduleAppointment();
  };

  const body = {
    paciente: {
      matricula: input.patient,
    },
    dentista: {
      matricula: input.dentist,
    },
    dataHoraAgendamento: input.appointmentData,
  };

  const scheduleAppointment = async () => {
    try {
      const response = await addAppointment(body);
      if(response){
        toast.success(`Agendamento realizado com sucesso!`, {
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
      else{
        toast.error(
          'Houve um erro ao agendar sua consulta! Tente novamente mais tarde.',
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          }
        );
      }
      
    } catch (e) {
      toast.error(
        'Houve um erro ao agendar sua consulta! Tente novamente mais tarde.',
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    }
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center container}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className='col-sm-12 col-lg-6'>
              <label htmlFor='dentist' className='form-label'>
                Dentista
              </label>
              <select
                className='form-select'
                name='dentist'
                id='dentist'
                value={dentists.matricula}
                onChange={(e) =>
                  setInput({ ...input, dentist: e.target.value })
                }
              >
                {dentists.map((dentist) => (
                  <option key={dentist.matricula} value={dentist.matricula}>
                    {dentist.nome} {dentist.sobrenome}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-sm-12 col-lg-6'>
              <label htmlFor='patient' className='form-label'>
                Paciente
              </label>
              <select
                className='form-select'
                name='patient'
                id='patient'
                value={patients.matricula}
                onChange={(e) =>
                  setInput({ ...input, patient: e.target.value })
                }
              >
                {patients.map((patient) => (
                  <option key={patient.matricula} value={patient.matricula}>
                    {patient.nome} {patient.sobrenome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className='col-12'>
              <label htmlFor='appointmentDate' className='form-label'>
                Data
              </label>
              <input
                className='form-control'
                id='appointmentDate'
                name='appointmentDate'
                type='datetime-local'
                onChange={(e) =>
                  setInput({ ...input, appointmentData: e.target.value })
                }
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button}`}
              type='submit'
              data-bs-dismiss='modal'
            >
              Marcar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
