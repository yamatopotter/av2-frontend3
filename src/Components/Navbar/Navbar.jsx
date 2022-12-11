import styles from "./Navbar.module.css";
import ThemeButton from './ThemeButton/ThemeButton';
import { Link } from 'react-router-dom';

const LinkLoggedButton = ({color}) => {
  if (localStorage.getItem('loginData')){
    if(color === 'dark'){
      return (<Link className={`nav-link btn btn-light text-${color}`} to="logout">Logout</Link>);
    }
    else{
      return (<Link className={`nav-link btn btn-dark text-${color}`} to="logout">Logout</Link>);
    }
  }
  else{
    return (<Link className="nav-link" to="login">Login</Link>);
  }
}


const Navbar = ({color}) => {  
  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm navbar-${color} bg-${color}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="home">DH Odonto</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="home">Home</Link>
              </li>

              <li className={`nav-item ${styles.navBarLink} dropdown`}>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Administração</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ver dentistas</a></li>
                    <li><a class="dropdown-item" href="#">Adicionar dentista</a></li>
                    <li><a class="dropdown-item" href="#">Editar dentista</a></li>
                    <li><a class="dropdown-item" href="#">Excluir dentista</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Ver pacientes</a></li>
                    <li><a class="dropdown-item" href="#">Adicionar paciente</a></li>
                    <li><a class="dropdown-item" href="#">Editar paciente</a></li>
                    <li><a class="dropdown-item" href="#">Excluir paciente</a></li>
                  </ul>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>                
                <LinkLoggedButton color={color}/>
              </li>
              <ThemeButton styles={styles.btnStyle} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
