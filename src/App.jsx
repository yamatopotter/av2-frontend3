
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';

import { ThemeColor } from './functions/context';
import { isUserLoggedIn } from './functions/authUser';

export function App() {
  const [color, setColor] = useState('light');

  /*Na linha seguinte deverá ser feito um teste se a aplicação
        está em dark mode e deverá utilizar a classe dark ou light */

function App() {
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
  }, [isUserLogged])

  return (
      <ThemeColor.Provider value={[color, setColor]}>
        <div className={`app ${color}`}>
          <Navbar color={color}/>
          <main class="container p-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeColor.Provider>
  );
}
