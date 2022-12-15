import { useEffect, useState } from 'react';
import { getAllPatients } from '../../functions/api';
import { DeleteConfirmation } from '../DeleteConfirmation/DeleteConfirmation';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';
import 'react-toastify/dist/ReactToastify.css';

export const TablePacientes = () => {
  const { color } = useContext(ThemeContext);
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

  function showToast(){
    toast.warning("A função ainda não está implementada", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
}

  return (
    <>
      <ToastContainer />
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
                <td>
                  {data.nome} {data.sobrenome}
                </td>
                <td>{data.matricula}</td>
                <td>{data.usuario.username}</td>
                <td>{data.dataDeCadastro}</td>
                <td>
                  <div className='d-flex justify-content-around'>
                    <button onClick={showToast} className='btn btn-outline-warning m-0'>📝</button>
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

      <DeleteConfirmation
        nomePaciente={modalData.nomePaciente}
        matricula={modalData.matricula}
        toast={toast}
        tipoUsuario = 'paciente'
      />
    </>
  );
};
