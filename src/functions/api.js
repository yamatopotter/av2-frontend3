import axios from 'axios';
import { isUserLoggedIn } from './authUser';
const baseUrl = 'https://dhodonto.ctdprojetos.com.br';

function generateAuthToken() {
  const loginData = isUserLoggedIn();
  const token = `${loginData.tipo} ${loginData.token}`;

  return token;
}

export const getAllDentists = async () => {
  try {
    const response = await axios.get(baseUrl + '/dentista');
    return response.data;
  } catch {
    return false;
  }
};

export const getDentistData = async (matricula) => {
  try {
    const response = await axios.get(
      baseUrl + `/dentista?matricula=${matricula}`
    );
    return response.data;
  } catch {
    return false;
  }
};

export const addDentist = async (dentista) => {
  try {
    const response = await axios.post(
      baseUrl + '/dentista',
      JSON.stringify(dentista)
    );
    return response.data;
  } catch {
    return false;
  }
};

export const updateDentist = async (dentista) => {
  try {
    const response = await axios.patch(
      baseUrl + '/dentista',
      JSON.stringify(dentista)
    );
    return response.data;
  } catch {
    return false;
  }
};

export const deleteDentist = async (matricula) => {
  try {
    const response = await axios.delete(
      baseUrl + `/dentista?matricula=${matricula}`
    );
    return response.data;
  } catch {
    return false;
  }
};

export const getAllPatients = async () => {
  try {
    const response = await axios.get(baseUrl + '/paciente');
    return response.data.body;
  } catch {
    return false;
  }
};

export const getPatientData = async (matricula) => {
  try {
    const response = await axios.get(
      baseUrl + `/paciente?matricula=${matricula}`
    );
    return response.data;
  } catch {
    return false;
  }
};

export const addPatient = async (paciente) => {
  try {
    const response = await axios.post(
      baseUrl + '/paciente',
      JSON.stringify(paciente)
    );
    return response.data;
  } catch {
    return false;
  }
};

export const updatePatient = async (paciente) => {
  try {
    const response = await axios.patch(
      baseUrl + '/paciente',
      JSON.stringify(paciente)
    );
    return response.data;
  } catch {
    return false;
  }
};

export const deletePatient = async (matricula) => {
  try {
    const token = generateAuthToken();
    const header = { 'Authorization': `${token}` };

    await axios.delete(`${baseUrl}/paciente?matricula=${matricula}`, header);
    return true;
  } catch {
    return false;
  }
};

export const getAllAppointments = async () => {
  try {
    const response = await axios.get(baseUrl + '/consulta');
    return response.data;
  } catch {
    return false;
  }
};

export const getAppointment = async (matricula) => {
  try {
    const response = await axios.get(
      baseUrl + `/consulta?matricula=${matricula}`
    );
    return response.data;
  } catch {
    return false;
  }
};

export const addAppointment = async (body) => {
  try {
    const token = generateAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }

    await axios.post(baseUrl + '/consulta', body, {headers: headers} );

    return true;
  } catch {
    return false;
  }
};

export const deleteAppointment = async (compromisso) => {
  try {
    const response = await axios.delete(
      baseUrl + `/consulta`,
      JSON.stringify(compromisso)
    );
    return response.data;
  } catch {
    return false;
  }
};
