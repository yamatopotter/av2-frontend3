import { useContext } from 'react';
import { ThemeContext } from '../../../Providers/ThemeProvider';

export default function ThemeButton({ styles }) {
  const {color, setColor} = useContext(ThemeContext);

  function changeThemeColor() {
    if (color === 'light') {
      setColor('dark');
      localStorage.setItem('color', 'dark');
    } else {
      setColor('light');
      localStorage.setItem('color', 'light');
    }
  }

  return (
    <li className={`nav-item`}>
      <button
        className={`btn btn-light${styles.btnStyle}`}
        onClick={changeThemeColor}
      >
        {color === 'light' ? '🌙' : '☀️'}
      </button>
    </li>
  );
}
