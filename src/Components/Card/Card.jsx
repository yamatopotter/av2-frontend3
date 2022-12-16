import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Providers/ThemeProvider';

import styles from './Card.module.css';

export function Card(props) {
  const { color } = useContext(ThemeContext);

  return (
    <>
      <div className={`card bg-${color}`}>
        <img
          className='card-img-top'
          src='/images/doctor.jpg'
          alt='doctor placeholder'
        />
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/detail/${props.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {props.nome} {props.sobrenome}
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
}
