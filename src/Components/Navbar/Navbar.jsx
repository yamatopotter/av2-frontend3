import styles from './Navbar.module.css';
import ThemeButton from './ThemeButton';

export function Navbar({ color }) {
  return (
    <header className='sticky-top'>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-${color} bg-${color}`}
        aria-label='Third navbar example'
      >
        <div className='container'>
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <a className={`navbar-brand ${styles.navbarBrand}`} href='/home'>
            DH Odonto
          </a>
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
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <a className='nav-link' href='/home'>
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                <a className='nav-link' href='/login'>
                  Login
                </a>
              </li>

              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                <a className='nav-link' href='/logout'>
                  Logout
                </a>
              </li>

              <ThemeButton styles={styles.btnStyle} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
