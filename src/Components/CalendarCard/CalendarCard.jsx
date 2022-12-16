import styles from './CalendarCard.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';

export const CalendarCard = ({data, toast}) => {
    const {color} = useContext(ThemeContext);
    let date = ''
    
    if(data) date = new Date(data.dataHoraAgendamento);
    
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

    function showToast(){
        toast.warning("A função ainda não está implementada", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }

    if(!data){
        return(
            <h1>Ops! Parece que houve um erro na exibição das informações.</h1>
        )
    }

    return(
        <div className="col-12 col-md-6 col-lg-3">
            <div className={ `card ${styles.cardAppointment} bg-${color}` } >
                <div>
                    <span className={styles.month}>
                      {monthNames[date.getMonth()]} - {date.getFullYear()}
                    </span>
                    <button className={styles.deleteButton} onClick={showToast}>🗑</button>
                    <span className={styles.day}>{date.getDate()}</span>
                </div>

                <div className='text-center fw-bold py-2' style={(color === 'dark') ? {borderTop: '1px solid #efefef', borderBottom: '1px solid #efefef'} : {borderTop: '1px solid #0a0a0a', borderBottom: '1px solid #0a0a0a'}}>
                    {(date.getUTCHours()<10) ? `0${date.getUTCHours()}` : date.getUTCHours()}:
                    {(date.getUTCMinutes()<10)?`0${date.getUTCMinutes()}` : date.getUTCMinutes()}
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
  )}
