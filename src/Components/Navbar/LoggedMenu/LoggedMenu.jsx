import styles from '../Navbar.module.css';
import { Link } from 'react-router-dom';
import { isUserLoggedIn } from '../../../functions/authUser';

export const LoggedMenu = () => {
    if(isUserLoggedIn()){
        return(
            <>
                <li className={`nav-item ${styles.navBarLink}`}>
                    <Link className='nav-link' to='home'>
                    Home
                    </Link>
                </li>
    
                <li className={`nav-item ${styles.navBarLink} dropdown`}>
                    <span
                    className='nav-link dropdown-toggle'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    >
                    Administração
                    </span>
                    <ul className='dropdown-menu'>
                    <li>
                        <Link className={`dropdown-item ${styles.linkCorrection}`} to='dentistas'>
                        Administrar dentistas
                        </Link>
                    </li>
                    {/* <li>
                        <Link className={`dropdown-item ${styles.linkCorrection}`} to='#'>
                        Adicionar dentista
                        </Link>
                    </li> */}
                    <li>
                        <hr className='dropdown-divider' />
                    </li>
                    <li>
                        <Link className={`dropdown-item ${styles.linkCorrection}`} to='pacientes'>
                        Administrar pacientes
                        </Link>
                    </li>
                    {/* <li>
                        <Link className='dropdown-item' to='#'>
                        Adicionar paciente
                        </Link>
                    </li> */}
                    </ul>
                </li>
    
                <li className={`nav-item ${styles.navBarLink} dropdown`}>
                    <span
                    className='nav-link dropdown-toggle'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    >
                    Consultas
                    </span>
                    <ul className='dropdown-menu'>
                    <li>
                        <Link className={`dropdown-item ${styles.linkCorrection}`} to='consultas'>
                        Administrar Consultas
                        </Link>
                    </li>
                    {/* <li>
                        <Link className='dropdown-item' to='#'>
                        Agendar Consulta
                        </Link>
                    </li> */}
                    </ul>
                </li>
            </>
        )
    }
    
    return ''
}