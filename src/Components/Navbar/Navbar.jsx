import styles from './Navbar.module.css';
import ThemeButton from './ThemeButton/ThemeButton';
import { Link } from 'react-router-dom';

const LinkLoggedButton = ({ color }) => {
  if (localStorage.getItem('loginData')) {
    if (color === 'dark') {
      return (
        <Link className={`nav-link btn btn-light text-${color}`} to='logout'>
          Logout
        </Link>
      );
    } else {
      return (
        <Link className={`nav-link btn btn-dark text-${color}`} to='logout'>
          Logout
        </Link>
      );
    }
  } else {
    return (
      <Link className='nav-link' to='login'>
        Login
      </Link>
    );
  }
};

export const Navbar = ({ color }) => {
  return (
    <header className='sticky-top'>
      <nav
        className={`navbar navbar-expand-sm navbar-${color} bg-${color}`}
        aria-label='Third navbar example'
      >
        <div className='container'>
          <Link className={`navbar-brand ${styles.navbarBrand}`} to='home'>
            DH Odonto
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample03'
            aria-controls='navbarsExample03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarsExample03'
          >
            <ul className='navbar-nav mb-2 mb-sm-0'>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className='nav-link' to='home'>
                  Home
                </Link>
              </li>

              <li className={`nav-item ${styles.navBarLink} dropdown`}>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Administração
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='dentistas'>
                      Administrar dentistas
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Adicionar dentista
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' to='pacientes'>
                      Administrar pacientes
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Adicionar paciente
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`nav-item ${styles.navBarLink} dropdown`}>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Consultas
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='consultas'>
                      Administrar Consultas
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Agendar Consulta
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`nav-item ${styles.navBarLink}`}>
                <LinkLoggedButton color={color} />
              </li>
              <ThemeButton styles={styles.btnStyle} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
