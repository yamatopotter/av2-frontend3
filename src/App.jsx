
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { ThemeContext } from './Providers/ThemeProvider';
import { isUserLoggedIn } from './functions/authUser';

export function App() {
  
  const [color, setColor] = useState(localStorage.getItem('color'));
  const isUserLogged = isUserLoggedIn();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(isUserLogged && location.pathname === '/'){
      navigate("/home");
    }
    else if(!isUserLogged && location.pathname === '/'){
      navigate("/login");
    }
  }, [isUserLogged, location, navigate])

  return (
      <ThemeContext.Provider value={[color, setColor]}>
        <div className={`app ${color}`}>
          <Navbar color={color}/>
          <main className={`container p-4`}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
  );
}
