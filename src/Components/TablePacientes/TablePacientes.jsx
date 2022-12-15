import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPatients } from '../../functions/api';
import { DeleteConfirmation } from '../DeleteConfirmation/DeleteConfirmation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TablePacientes = () => {
  const [tableData, setTableData] = useState([]);
  const [modalData, setModalData] = useState({
    nomePaciente: '',
    matricula: '',
  });

  useEffect(() => {
    async function getData() {
      const data = await getAllPatients();
      setTableData(data);
      return data;
    }

    getData();
  }, []);

  const tableHeader = [
    { title: 'Nome' },
    { title: 'Matricula' },
    { title: 'Usuário' },
    { title: 'Data de Cadastro' },
    { title: 'Ações' },
  ];

  return (
    <>
      <ToastContainer />
      <table className='table table-striped'>
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
                <td>
                  {data.nome} {data.sobrenome}
                </td>
                <td>{data.matricula}</td>
                <td>{data.usuario.username}</td>
                <td>{data.dataDeCadastro}</td>
                <td>
                  <Link to={`paciente/editar/${data.matricula}`}>📝</Link>
                  <button
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <DeleteConfirmation
        nomePaciente={modalData.nomePaciente}
        matricula={modalData.matricula}
        toast={toast}
      />
    </>
  );
};
