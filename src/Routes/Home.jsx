import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../Components/Card/Card';
import { Loading } from '../Components/Loading/Loading';
import { getAllDentists } from '../functions/api';

export function Home() {
  const [dentists, setDentists] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getAllDentists();

      setDentists(data);
      setLoading(false);
    }
    getData();
  }, []);

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
