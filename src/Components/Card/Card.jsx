import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Providers/ThemeProvider';

import styles from './Card.module.css';

export function Card(props) {
  const {color} = useContext(ThemeContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card bg-${color}`}>
        <img
          className='card-img-top'
          src='/images/doctor.jpg'
          alt='doctor placeholder'
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${props.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {props.nome} {props.sobrenome}
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
}
