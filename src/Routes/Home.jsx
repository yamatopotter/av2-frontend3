import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Components/Card/Card';
import { Loading } from '../Components/Loading/Loading';

import { api } from '../Services/api';

export function Home() {
  const [dentists, setDentists] = useState({});
  const [loading, setLoading] = useState(true);

  //Nesse useEffect, deverá ser obtido todos os dentistas da API
  //Armazena-los em um estado para posteriormente fazer um map
  //Usando o componente <Card />
  useEffect(() => {
    getAllDentists();
  }, []);

  async function getAllDentists() {
    const response = await api.get('/dentista');
    setDentists(response.data);

    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Home</h1>
      <div className='card-grid container'>
        {dentists.map((dentist) => (
          <Link key={dentist.matricula} to={`/detail/${dentist.matricula}`}>
            <div className='dentist'>
              <Card
                matricula={dentist.matricula}
                nome={dentist.nome}
                sobrenome={dentist.sobrenome}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
