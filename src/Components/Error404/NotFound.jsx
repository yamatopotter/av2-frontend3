import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <div>
      <h1>Ops! a rota não foi encontrada</h1>

      <div className={styles.imgHolder}>
        <img
          src={'./images/dente_quebrado.png'}
          className={styles.brokenTooth}
          alt='imagem de dente quebrado'
        />
      </div>
    </div>
  );
}
