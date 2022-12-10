import { useContext } from "react";
import Color from "../../../functions/context";

export default function ThemeButton({styles}) {
  const [color, setColor] = useContext(Color);

  return (

    <li className={`nav-item`}>
    {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
        Lembre-se de usar um estado no contexto para fazer essa alteração.
        Na linha seguinte deverá ser feito um teste se a aplicação
        está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
    <button
        className={`btn btn-light${styles.btnStyle}`}
        onClick={() => {(color == 'light') ? setColor('dark') : setColor('light')}}
    >
        {(color == 'light') ? '🌙' : '☀️'}
    </button>
    </li>
  );
}