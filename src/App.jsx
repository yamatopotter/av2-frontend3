import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { ThemeColor } from './functions/context';

function App() {
  
  const [color, setColor] = useState(localStorage.getItem('color'));

  return (
      <ThemeColor.Provider value={[color, setColor]}>
        <div className={`app ${color}`}>
          <Navbar color={color}/>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeColor.Provider>
  );
}

export default App;
