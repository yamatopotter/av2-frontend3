import styles from './CalendarCard.module.css';
import { Link } from 'react-router-dom';

export const CalendarCard = ({data}) => {
    const date = new Date(data.dataHoraAgendamento);
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    return(
        <div className="col-12 col-md-6 col-lg-3">
            <div className={ `card ${styles.cardAppointment}` } >
                <div>
                    <span className={styles.month}>{monthNames[date.getMonth()]} - {date.getFullYear()}</span>
                    <Link className={styles.deleteButton} to={`/consulta/${data.dentista.matricula}/${data.dataHoraAgendamento}`}>🗑</Link>
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
}