import { useContext } from 'react';

import { deletePatient, deleteDentist } from '../../functions/api';
import styles from './DeleteConfirmation.module.css';
import { ThemeContext } from '../../Providers/ThemeProvider';

export function DeleteConfirmation({ nomePaciente, matricula, toast, tipoUsuario }) {
  const { color } = useContext(ThemeContext);

  async function excluirUsuario(matricula) {
    let retorno = '';

    if(tipoUsuario === 'dentista') { 
      retorno = await deleteDentist(matricula);
    }
    else{
      retorno = await deletePatient(matricula);
    }
    
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
      <div className='modal-dialog '>
        <div
          className={
            color === 'dark'
              ? `modal-content ${styles.DarkModal}`
              : `modal-content`
          }
        >
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Deseja realmente excluir o paciente {nomePaciente}
            </h1>
            <button
              type='button'
              className={
                color === 'dark'
                  ? `btn-close ${styles.closeButtonDark}`
                  : `btn-close`
              }
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
                excluirUsuario(matricula, tipoUsuario);
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
