import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllDentists } from '../../functions/api';
import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';

export const TableDentistas = () => {
  const { color } = useContext(ThemeContext);
  const [tableData, setTableData] = useState([]);
  const [modalData, setModalData] = useState({
    nomePaciente: '',
    matricula: '',
  });

  useEffect(() => {
    async function getData() {
      const data = await getAllDentists();
      setTableData(data);
      return data;
    }

    getData();
  }, []);

  const tableHeader = [
    { title: 'Nome' },
    { title: 'Sobrenome' },
    { title: 'Matricula' },
    { title: 'Usuário' },
    { title: 'Ação' },
  ];

  return (
    <table className={(color === 'dark') ? 'table table-striped table-dark' : 'table table-striped'} >
      <thead>
        <tr>
          {tableHeader.map((data, index) => {
            return (
              <th scope='col' key={index}>
                {data.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.nome}</td>
              <td>{data.sobrenome}</td>
              <td>{data.matricula}</td>
              <td>{data.usuario.username}</td>
              <td>
                <div className='d-flex justify-content-around'>
                  <Link to={`paciente/editar/${data.matricula}`} className='btn btn-outline-warning m-0'>📝</Link>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() =>
                      setModalData({
                        nomePaciente: `${data.nome}`,
                        matricula: `${data.matricula}`,
                      })
                    }
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
