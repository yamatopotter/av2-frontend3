import { deletePatient } from '../../functions/api';
import styles from './DeleteConfirmation.module.css';

export function DeleteConfirmation({ nomePaciente, matricula, toast }) {
  async function excluirPaciente(matricula) {
    const retorno = await deletePatient(matricula);
    if (retorno) {
      toast.success('Paciente excluído com sucesso', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error('Houve um erro ao excluir. Tente mais tarde.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }

  return (
    <div
      className={`modal fade`}
      id='exampleModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`modal-content`}>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Deseja realmente excluir o paciente {nomePaciente}
            </h1>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
            // está em dark mode e deverá utilizado o css correto */}
            <button
              type='button'
              className={`btn-close`}
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className={`modal-body ${styles.buttonsApart}`}>
            <button
              type='button'
              className={`btn btn-secondary`}
              data-bs-dismiss='modal'
              aria-label='Cancelar'
            >
              Cancelar
            </button>

            <button
              type='button'
              className={`btn btn-danger`}
              data-bs-dismiss='modal'
              onClick={() => {
                excluirPaciente(matricula);
              }}
              aria-label='Excluir'
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
