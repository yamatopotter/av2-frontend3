import { useContext } from 'react';

import { ThemeContext } from '../../Providers/ThemeProvider';

import styles from './Footer.module.css';

export function Footer() {
  const { color } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button
          className={`btn btn-danger ${styles.top}`}
          onClick={scrollToTop}
        >
          Voltar para o topo
        </button>
        <div
          className={
            color === 'dark'
              ? `navbar-dark bg-dark ${styles.footer}`
              : `navbar-light bg-light ${styles.footer}`
          }
        >
          <div className='container'>
            <div className={`row`}>
              <div className='col-sm-12 col-lg-6'>
                <img
                  className={`${styles.dhLogo}`}
                  src={
                    color === 'dark' ? '/images/DH-dark.png' : '/images/DH.png'
                  }
                  alt='DH-logo'
                />
              </div>
              <div
                className={
                  color === `dark`
                    ? `col-sm-12 col-lg-6 ${styles.iconsDark}`
                    : `col-sm-12 col-lg-6 ${styles.icons}`
                }
              >
                <img
                  src='/images/ico-facebook.png'
                  alt='ícone do facebook'
                  className={styles.icon}
                />
                <img
                  src='/images/ico-instagram.png'
                  alt='ícone do instagram'
                  className={styles.icon}
                />
                <img
                  src='/images/ico-whatsapp.png'
                  alt='ícone do whatsapp'
                  className={styles.icon}
                />
                <img
                  src='/images/ico-tiktok.png'
                  alt='ícone do tiktok'
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
